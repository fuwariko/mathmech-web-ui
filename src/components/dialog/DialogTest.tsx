import { useEffect, useRef } from 'react';
import * as S from './Dialog.styles';

interface DialogProps extends React.DialogHTMLAttributes<HTMLDialogElement> {
  title?: string;
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const FOCUSABLE_SELECTOR = [
  'button:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'a[href]',
  '[tabindex]:not([tabindex="-1"])',
  'input:not([disabled]):not([type="radio"])',
].join(',');

export const Dialog: React.FC<DialogProps> = ({
  open,
  onClose,
  title,
  children,
}) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      if (!dialog.open) dialog.showModal();
      requestAnimationFrame(() => closeBtnRef.current?.focus());
    } else {
      if (dialog.open) dialog.close();
    }
  }, [open]);

  const getTabbablesInDomOrder = () => {
    const dialog = dialogRef.current;
    if (!dialog) return [];

    const result: HTMLElement[] = [];
    const visitedRadioGroups = new Set<string>();

    const walk = (root: ParentNode) => {
      const nodes = Array.from(root.children);

      for (const node of nodes) {
        const el = node as HTMLElement;

        if (el.matches('input[type="radio"]')) {
          const radio = el as HTMLInputElement;
          const name = radio.name || '__no-name__';

          if (visitedRadioGroups.has(name)) continue;

          const group = Array.from(
            dialog.querySelectorAll<HTMLInputElement>(
              `input[type="radio"][name="${CSS.escape(name)}"]`,
            ),
          ).filter((r) => !r.disabled);

          visitedRadioGroups.add(name);

          if (group.length > 0) {
            const checked = group.find((r) => r.checked) ?? group[0];
            result.push(checked);
          }

          continue;
        }

        const isFocusable =
          el.matches(FOCUSABLE_SELECTOR) &&
          el.tabIndex !== -1 &&
          !el.hasAttribute('disabled');

        if (isFocusable) {
          result.push(el);
        }

        if (el.children.length > 0) {
          walk(el);
        }
      }
    };

    walk(dialog);
    return result;
  };

  const handleRadioKeys = (e: React.KeyboardEvent<HTMLDialogElement>) => {
    const target = e.target as HTMLElement;
    if (!target.matches('input[type="radio"]')) return;

    const radio = target as HTMLInputElement;
    const dialog = dialogRef.current;
    if (!dialog) return;

    const group = Array.from(
      dialog.querySelectorAll<HTMLInputElement>(
        `input[type="radio"][name="${CSS.escape(radio.name)}"]`,
      ),
    ).filter((r) => !r.disabled);

    const index = group.indexOf(radio);
    if (index === -1) return;

    if (
      e.key === 'ArrowRight' ||
      e.key === 'ArrowDown' ||
      e.key === 'ArrowLeft' ||
      e.key === 'ArrowUp'
    ) {
      e.preventDefault();

      const nextIndex =
        e.key === 'ArrowRight' || e.key === 'ArrowDown'
          ? (index + 1) % group.length
          : (index - 1 + group.length) % group.length;

      const next = group[nextIndex];
      next.click();
      next.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDialogElement>) => {
    handleRadioKeys(e);

    if (e.key !== 'Tab') return;

    const tabbables = getTabbablesInDomOrder();
    if (tabbables.length === 0) return;

    const active = document.activeElement as HTMLElement | null;
    const currentIndex = tabbables.indexOf(active ?? tabbables[0]);

    e.preventDefault();

    const nextIndex = e.shiftKey
      ? currentIndex <= 0
        ? tabbables.length - 1
        : currentIndex - 1
      : currentIndex === -1 || currentIndex === tabbables.length - 1
        ? 0
        : currentIndex + 1;

    tabbables[nextIndex]?.focus();
  };

  return (
    <S.Dialog
      ref={dialogRef}
      onKeyDown={handleKeyDown}
      aria-labelledby="dialog-title"
      aria-modal="true"
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
    >
      <S.Header><S.Title id="dialog-title">{title}</S.Title></S.Header>
      <S.CloseButton lang='ru' ref={closeBtnRef} type="button" onClick={onClose}/>
      <div>{children}</div>
    </S.Dialog>
  );
};