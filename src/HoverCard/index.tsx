import { createStyles } from 'antd-style';
import { ReactNode, memo, useEffect, useRef } from 'react';

import Item from './Item';

const childrenClassName = 'hover-card';

const useStyles = createStyles(({ css, responsive }) => ({
  container: css`
    overflow: scroll;
    max-height: 370px;

    &:hover > .${childrenClassName}::after {
      opacity: 1;
    }
  `,

  grid: css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 12px;

    ${responsive.mobile} {
      display: flex;
      flex-direction: column;
    }
  `,
}));

interface HoverCardProps<T = any> {
  items: T[];
  renderItem: (item: T) => ReactNode;
}

const HoverCard = memo<HoverCardProps>(({ items, renderItem }) => {
  const { styles, cx } = useStyles();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const fn = (e: MouseEvent) => {
      // @ts-ignore
      for (const card of document.querySelectorAll(`.${childrenClassName}`)) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      }
    };
    ref.current.addEventListener('mousemove', fn);

    return () => {
      ref.current?.removeEventListener('mousemove', fn);
    };
  }, []);
  return (
    <div className={cx(styles.container, styles.grid)} ref={ref}>
      {items.map((item, index) => {
        const children = renderItem(item);
        return (
          <Item className={childrenClassName} key={index}>
            {children}
          </Item>
        );
      })}
    </div>
  );
});

export default HoverCard;
