import { css, keyframes } from '@emotion/css';
import type { TColors } from '../../theme/color-tokens';
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
  border-radius: 8px;
`;

interface IHeaderSkeletonProps {
  backgroundColor?: TColors;
  sticky?: boolean;
}

export const HeaderSkeleton = ({
  sticky = false,
}: IHeaderSkeletonProps) => {
  return (
    <header className={headerStyles(sticky)}>
      <div className={contentStyles}>
        <div className={topStyles}>
          <div className={leftAccessory} />
          <div className={rightAccessory} />
        </div>

        <div className={titleSkeleton} />
      </div>
    </header>
  );
};


const headerStyles = (
  sticky: boolean,
) => css`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  gap: 40px;
  padding: 32px 0;

  background: #ffffff;
  box-sizing: border-box;

  ${sticky &&
  css`
    position: sticky;
    top: 0;
    z-index: 2;
  `}
`;

const contentStyles = css`
  width: 100%;
  max-width: 1024px;

  display: flex;
  flex-direction: column;

  align-items: flex-start;

  padding: 0 32px;
  box-sizing: border-box;
`;

const topStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-bottom: 16px; /* 👈 ВАЖНО: было 12 → стало просторнее */
  gap: 16px; /* 👈 чтобы не липло */
`;

const leftAccessory = css`
  width: 90px;
  height: 20px;
  ${skeletonBase};
`;

const rightAccessory = css`
  width: 140px;
  height: 20px;
  ${skeletonBase};
`;

const titleSkeleton = css`
  width: 50%;
  height: 30px;
  ${skeletonBase};
`;