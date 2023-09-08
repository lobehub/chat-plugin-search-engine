import { Avatar } from '@lobehub/ui';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { SearchItem } from '../type';
import { useStyles } from './style';

const GridItem = memo<SearchItem>(({ content, date, link, favicon, title, source }) => {
  const { styles } = useStyles();

  return (
    <a className={styles.link} href={link!} rel="noreferrer" target={'_blank'}>
      <Flexbox distribution={'space-between'} flex={1} gap={12} padding={12}>
        <Flexbox>
          <Flexbox>
            <Flexbox className={styles.title}>{title}</Flexbox>
          </Flexbox>
          <Flexbox className={styles.desc}>{date ? `${date} - ${content}` : content}</Flexbox>
        </Flexbox>
        <Flexbox align={'center'} gap={8} horizontal>
          {favicon ? (
            <Avatar size={16} src={favicon} />
          ) : (
            <Avatar avatar={title} background={'#000'} size={16} />
          )}
          <Flexbox>
            <Flexbox className={styles.desc}>{source}</Flexbox>
          </Flexbox>
        </Flexbox>
      </Flexbox>
    </a>
  );
});

export default GridItem;
