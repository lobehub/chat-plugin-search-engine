import { PluginRenderProps } from '@lobehub/chat-plugin-sdk';
import { Icon } from '@lobehub/ui';
import { Segmented } from 'antd';
import { createStyles } from 'antd-style';
import { LucideLayoutGrid, LucideList } from 'lucide-react';
import { memo, useState } from 'react';
import { Flexbox } from 'react-layout-kit';

import GridItem from './GridItem';
import ListItem from './ListItem';
import { Result } from './type';

const useStyles = createStyles(({ css }) => {
  return {
    container: css`
      overflow: scroll;
      max-height: 370px;
    `,
    grid: css`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 12px;
    `,
  };
});

const Render = memo<PluginRenderProps<Result>>(({ content }) => {
  const { styles, cx } = useStyles();
  const [mode, setMode] = useState('grid');

  const isGrid = mode === 'grid';
  return (
    <Flexbox gap={8}>
      <Flexbox align={'center'} horizontal justify={'space-between'}>
        <Flexbox>Search Results:{content.length}</Flexbox>
        <Flexbox>
          <Segmented
            onChange={(v) => setMode(v as any)}
            options={[
              { icon: <Icon icon={LucideLayoutGrid} />, value: 'grid' },
              { icon: <Icon icon={LucideList} />, value: 'list' },
            ]}
            size={'small'}
            value={mode}
          />
        </Flexbox>
      </Flexbox>
      <div className={cx(styles.container, isGrid && styles.grid)}>
        {content.map((item) =>
          isGrid ? <GridItem {...item} key={item.link} /> : <ListItem {...item} key={item.link} />,
        )}
      </div>
    </Flexbox>
  );
});

export default Render;
