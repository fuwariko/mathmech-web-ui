import React, { useEffect, useRef, type JSX } from 'react';
import * as S from './Dialog.styles';

type ModalProps = {
  open: boolean;
  title: string;
  children: JSX.Element;
  onClose: () => void;
};

const getFocusableElements = (root: HTMLElement | null) => {
  if (!root) return [];
  return Array.from(
    root.querySelectorAll<HTMLElement>(
      [
        'a[href]',
        'button:not([disabled])',
        'textarea:not([disabled])',
        'input:not([disabled])',
        'select:not([disabled])',
        '[tabindex]:not([tabindex="-1"])',
      ].join(','),
    ),
  ).filter((el) => !el.hasAttribute('disabled') && el.offsetParent !== null);
};

export const Modal: React.FC<ModalProps> = ({ open, title, children, onClose }) => {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const lastActiveElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    lastActiveElementRef.current = document.activeElement as HTMLElement | null;

    const appRoot = document.getElementById('app-root');
    if (appRoot) appRoot.setAttribute('inert', '');

    requestAnimationFrame(() => {
      closeBtnRef.current?.focus();
    });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;

      const focusable = getFocusableElements(dialogRef.current);
      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey) {
        if (active === first || !dialogRef.current?.contains(active)) {
          event.preventDefault();
          last.focus();
        }
      } else if (active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      if (appRoot) appRoot.removeAttribute('inert');
      lastActiveElementRef.current?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <S.Overlay
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <S.Dialog
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <S.Header>
          <S.Title id="modal-title">{title}</S.Title>
          <S.CloseButton ref={closeBtnRef} type="button" onClick={onClose}>
            Закрыть
          </S.CloseButton>
        </S.Header>

        <S.Body>{children}</S.Body>
      </S.Dialog>
    </S.Overlay>
  );
};