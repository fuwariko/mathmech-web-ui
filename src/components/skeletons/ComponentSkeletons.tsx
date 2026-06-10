import { css, cx } from '@emotion/css';
import type { SkeletonProps } from './SkeletonBase';
import { SkeletonBlock, SkeletonCircle, SkeletonStack } from './SkeletonBase';

export const BadgeSkeleton = ({ className, style }: SkeletonProps) => (
  <SkeletonBlock
    width={88}
    height={32}
    radius={50}
    className={className}
    style={style}
  />
);

export const ButtonSkeleton = ({ className, style }: SkeletonProps) => (
  <SkeletonBlock
    width={120}
    height={44}
    radius={16}
    className={className}
    style={style}
  />
);

export const LinkSkeleton = ({ className, style }: SkeletonProps) => (
  <SkeletonBlock
    width={112}
    height={18}
    radius={6}
    className={className}
    style={style}
  />
);

export const TextSkeleton = ({
  lines = 3,
  className,
  style,
}: SkeletonProps & { lines?: number }) => (
  <SkeletonStack gap={8} className={className} style={style}>
    {Array.from({ length: lines }, (_, index) => (
      <SkeletonBlock
        key={index}
        width={index === lines - 1 ? '72%' : '100%'}
        height={16}
      />
    ))}
  </SkeletonStack>
);

export const InputTextSkeleton = ({ className, style }: SkeletonProps) => (
  <SkeletonStack gap={8} className={className} style={style}>
    <SkeletonBlock width={96} height={14} />
    <SkeletonBlock width="100%" height={44} radius={10} />
  </SkeletonStack>
);

export const TextareaSkeleton = ({ className, style }: SkeletonProps) => (
  <SkeletonStack gap={8} className={className} style={style}>
    <SkeletonBlock width={112} height={14} />
    <SkeletonBlock width="100%" height={112} radius={10} />
  </SkeletonStack>
);

export const SelectSkeleton = ({ className, style }: SkeletonProps) => (
  <SkeletonStack gap={8} className={className} style={style}>
    <SkeletonBlock width={104} height={14} />
    <div className={controlSkeletonStyles}>
      <SkeletonBlock width="55%" height={16} />
      <SkeletonCircle size={18} />
    </div>
  </SkeletonStack>
);

export const MultiselectSkeleton = SelectSkeleton;

export const CheckboxSkeleton = ({ className, style }: SkeletonProps) => (
  <div className={cx(inlineSkeletonStyles, className)} style={style}>
    <SkeletonBlock width={24} height={24} radius={6} />
    <SkeletonBlock width={96} height={16} />
  </div>
);

export const RadioSkeleton = ({ className, style }: SkeletonProps) => (
  <div className={cx(inlineSkeletonStyles, className)} style={style}>
    <SkeletonCircle size={24} />
    <SkeletonBlock width={96} height={16} />
  </div>
);

export const ToggleSkeleton = ({ className, style }: SkeletonProps) => (
  <div className={cx(inlineSkeletonStyles, className)} style={style}>
    <SkeletonBlock width={46} height={26} radius={50} />
    <SkeletonBlock width={96} height={16} />
  </div>
);

export const RatingStarsSkeleton = ({ className, style }: SkeletonProps) => (
  <div className={cx(starsSkeletonStyles, className)} style={style}>
    {Array.from({ length: 5 }, (_, index) => (
      <SkeletonCircle key={index} size={24} />
    ))}
  </div>
);

export const RadioStarsSkeleton = RatingStarsSkeleton;

export const TabsSkeleton = ({ className, style }: SkeletonProps) => (
  <SkeletonStack gap={16} className={className} style={style}>
    <div className={tabsSkeletonStyles}>
      <SkeletonBlock width={96} height={36} radius={18} />
      <SkeletonBlock width={120} height={36} radius={18} />
      <SkeletonBlock width={88} height={36} radius={18} />
    </div>
    <TextSkeleton lines={3} />
  </SkeletonStack>
);

export const AccordionSkeleton = ({
  items = 3,
  className,
  style,
}: SkeletonProps & { items?: number }) => (
  <SkeletonStack gap={8} className={className} style={style}>
    {Array.from({ length: items }, (_, index) => (
      <div className={accordionItemSkeletonStyles} key={index}>
        <SkeletonBlock width="55%" height={16} />
        <SkeletonCircle size={20} />
      </div>
    ))}
  </SkeletonStack>
);

export const FooterSkeleton = ({ className, style }: SkeletonProps) => (
  <footer className={cx(footerSkeletonStyles, className)} style={style}>
    <SkeletonBlock width={160} height={16} />
    <SkeletonBlock width={120} height={16} />
  </footer>
);

export const DialogSkeleton = ({ className, style }: SkeletonProps) => (
  <div className={cx(dialogSkeletonStyles, className)} style={style}>
    <div className={dialogHeaderSkeletonStyles}>
      <SkeletonBlock width="45%" height={24} />
      <SkeletonCircle size={28} />
    </div>
    <TextSkeleton lines={4} />
    <div className={dialogActionsSkeletonStyles}>
      <ButtonSkeleton />
      <ButtonSkeleton />
    </div>
  </div>
);

const inlineSkeletonStyles = css`
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

const controlSkeletonStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  min-height: 44px;
  padding: 0 14px;
  box-sizing: border-box;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  background: #ffffff;
`;

const starsSkeletonStyles = css`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;

const tabsSkeletonStyles = css`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const accordionItemSkeletonStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
  padding: 14px 16px;
  box-sizing: border-box;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  background: #ffffff;
`;

const footerSkeletonStyles = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  padding: 16px 24px;
  box-sizing: border-box;
`;

const dialogSkeletonStyles = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: min(520px, 100%);
  padding: 24px;
  box-sizing: border-box;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  background: #ffffff;
`;

const dialogHeaderSkeletonStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

const dialogActionsSkeletonStyles = css`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;
