import { createStyles } from 'antd-style';
import { rgba } from 'polished';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { SearchItem } from './type';

const useStyles = createStyles(({ css, token, cx }) => {
  const title = css`
    margin-top: 4px;
    font-size: 16px;
  `;
  return {
    container: css`
      background: ${token.colorBgContainer};
      border: 1px solid ${rgba(token.colorBorderSecondary, 0.5)};
      border-radius: 8px;
      :hover {
        background: ${token.colorFillSecondary};
      }
    `,
    desc: css`
      color: ${token.colorTextTertiary};
    `,
    displayLink: css`
      color: ${token.colorTextQuaternary};
    `,
    favicon: css`
      border-radius: 50%;
    `,
    link: css`
      &:hover {
        .${cx(title)} {
          text-decoration: underline;
        }
      }
      display: flex;
      flex: 1;
    `,
    title,
  };
});

const GridItem = memo<SearchItem>(({ content, date, link, favicon, title, source }) => {
  const { styles } = useStyles();

  return (
    <a className={styles.link} href={link!} rel="noreferrer" target={'_blank'}>
      <Flexbox
        className={styles.container}
        distribution={'space-between'}
        flex={1}
        gap={12}
        padding={12}
      >
        <Flexbox>
          <Flexbox>
            <Flexbox className={styles.title}>{title}</Flexbox>
          </Flexbox>
          <Flexbox className={styles.desc}>{date ? `${date} - ${content}` : content}</Flexbox>
        </Flexbox>
        <Flexbox align={'center'} gap={8} horizontal>
          {favicon && (
            <img
              alt={title || link}
              className={styles.favicon}
              height={16}
              src={favicon}
              width={16}
            />
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
