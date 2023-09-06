import { PluginRenderProps } from '@lobehub/chat-plugin-sdk';
import { createStyles } from 'antd-style';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import GridItem from './GridItem';
import { Result } from './type';

const useStyles = createStyles(({ css, responsive }) => {
  return {
    container: css`
      overflow: scroll;
      max-height: 370px;
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
  };
});

const Render = memo<PluginRenderProps<Result>>(({ content }) => {
  const { styles, cx } = useStyles();

  return (
    <Flexbox gap={8}>
      <div className={cx(styles.container, styles.grid)}>
        {content.map((item) => (
          <GridItem {...item} key={item.link} />
        ))}
      </div>
    </Flexbox>
  );
});

export default Render;
