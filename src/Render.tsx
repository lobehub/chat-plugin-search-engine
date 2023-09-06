import { PluginRenderProps } from '@lobehub/chat-plugin-sdk/client';
import { memo } from 'react';

import GridItem from './GridItem';
import HoverCard from './HoverCard';
import { Result } from './type';

const render = (item: any) => <GridItem {...item} />;

const Render = memo<PluginRenderProps<Result>>(({ content }) => {
  return <HoverCard items={content} renderItem={render} />;
});

export default Render;
