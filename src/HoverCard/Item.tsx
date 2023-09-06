import { createStyles } from 'antd-style';
import { rgba } from 'polished';
import { ReactNode, memo } from 'react';
import { Flexbox } from 'react-layout-kit';

const useStyles = createStyles(({ css, token, isDarkMode }) => {
  const borderRadius = 12;
  return {
    container: css`
      background: ${rgba(token.colorBorderSecondary, 0.5)};
      border-radius: ${borderRadius}px;
      cursor: pointer;
      display: flex;
      width: 100%;

      flex-direction: column;
      position: relative;

      &::before,
      &::after {
        border-radius: inherit;
        content: '';
        height: 100%;
        left: 0;
        opacity: 0;
        position: absolute;
        top: 0;
        transition: opacity 500ms;
        width: 100%;
      }

      &::before {
        user-select: none;
        pointer-events: none;
        background: radial-gradient(
          800px circle at var(--mouse-x) var(--mouse-y),
          ${rgba(token.colorTextBase, isDarkMode ? 0.06 : 0.02)},
          transparent 40%
        );
        z-index: 3;
      }

      &::after {
        background: radial-gradient(
          600px circle at var(--mouse-x) var(--mouse-y),
          ${rgba(token.colorTextBase, isDarkMode ? 0.4 : 0.2)},
          transparent 40%
        );
        z-index: 1;
      }

      :hover::before {
        opacity: 1;
      }
    `,
    content: css`
      background: ${token.colorBgContainer};
      height: 100%;
      flex-grow: 1;
      border-radius: ${borderRadius - 1}px;
      margin: 1px;
      z-index: 2;
    `,
  };
});

const HoverCard = memo<{ children: ReactNode; className: string }>(({ children, className }) => {
  const { styles, cx } = useStyles();

  return (
    <div className={cx(className, styles.container)}>
      <Flexbox className={styles.content}>{children}</Flexbox>
    </div>
  );
});

export default HoverCard;
