import { css, cx, keyframes } from '@emotion/css';
import type { CSSProperties, ReactNode } from 'react';

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

const skeletonBase = css`
  background: linear-gradient(
    90deg,
    #e9e9e9 25%,
    #f6f6f6 37%,
    #e9e9e9 63%
  );
  background-size: 400% 100%;
  animation: ${shimmer} 1.2s ease-in-out infinite;
`;

export type SkeletonProps = {
  className?: string;
  style?: CSSProperties;
};

type SkeletonBlockProps = SkeletonProps & {
  width?: number | string;
  height?: number | string;
  radius?: number | string;
};

const toCssSize = (value?: number | string) =>
  typeof value === 'number' ? `${value}px` : value;

export const SkeletonBlock = ({
  width = '100%',
  height = 16,
  radius = 8,
  className,
  style,
}: SkeletonBlockProps) => (
  <span
    aria-hidden="true"
    style={style}
    className={cx(
      skeletonBlockStyles(width, height, radius),
      className,
    )}
  />
);

export const SkeletonCircle = ({
  size = 24,
  className,
  style,
}: SkeletonProps & { size?: number }) => (
  <SkeletonBlock
    width={size}
    height={size}
    radius="50%"
    className={className}
    style={style}
  />
);

export const SkeletonStack = ({
  children,
  gap = 10,
  className,
  style,
}: SkeletonProps & {
  children: ReactNode;
  gap?: number;
}) => (
  <div className={cx(stackStyles(gap), className)} style={style}>
    {children}
  </div>
);

const skeletonBlockStyles = (
  width: number | string,
  height: number | string,
  radius: number | string,
) => css`
  display: block;
  flex: 0 0 auto;
  width: ${toCssSize(width)};
  height: ${toCssSize(height)};
  border-radius: ${toCssSize(radius)};
  ${skeletonBase};
`;

const stackStyles = (gap: number) => css`
  display: flex;
  flex-direction: column;
  gap: ${gap}px;
`;
