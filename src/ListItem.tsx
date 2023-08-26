import { createStyles } from 'antd-style';
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
      overflow: scroll;
      max-height: 370px;
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
    item: css`
      :not(:last-child) {
        border-bottom: 1px solid ${token.colorBorder};
      }
    `,
    link: css`
      &:hover {
        .${cx(title)} {
          text-decoration: underline;
        }
      }
    `,
    title,
  };
});

const ListItem = memo<SearchItem>(
  ({ content, date, link, favicon, title, displayed_link, source }) => {
    const { styles } = useStyles();

    return (
      <Flexbox className={styles.item} distribution={'space-between'} horizontal padding={12}>
        <Flexbox>
          <a className={styles.link} href={link!} rel="noreferrer" target={'_blank'}>
            <Flexbox>
              <Flexbox align={'center'} gap={12} horizontal>
                {favicon && (
                  <img
                    alt={title || link}
                    className={styles.favicon}
                    height={24}
                    src={favicon}
                    width={24}
                  />
                )}
                <Flexbox>
                  <Flexbox className={styles.desc}>{source}</Flexbox>
                  <Flexbox className={styles.displayLink}>{displayed_link}</Flexbox>
                </Flexbox>
              </Flexbox>
              <Flexbox className={styles.title}>{title}</Flexbox>
            </Flexbox>
          </a>
          <Flexbox className={styles.desc}>{date ? `${date} - ${content}` : content}</Flexbox>
        </Flexbox>
      </Flexbox>
    );
  },
);

export default ListItem;
