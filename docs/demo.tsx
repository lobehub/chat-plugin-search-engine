import Render from '@lobehub/chat-plugin-search-engine';

import { data } from './data';

export default () => {
  return (
    <div style={{ maxWidth: 960 }}>
      <Render content={data} name={'search-engine'} />
    </div>
  );
};
