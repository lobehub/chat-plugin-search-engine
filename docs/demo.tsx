import Render from '@lobehub/chat-plugin-search-engine';

import { data } from './data';

export default () => {
  return <Render content={data} name={'search-engine'} />;
};
