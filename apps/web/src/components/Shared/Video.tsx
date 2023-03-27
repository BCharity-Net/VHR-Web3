import 'plyr-react/plyr.css';

import Plyr from 'plyr-react';
import type { FC } from 'react';
import { memo } from 'react';
import getIPFSLink from 'utils/getIPFSLink';
import imageProxy from 'utils/imageProxy';

interface Props {
  src: string;
  poster: string;
}

const Video: FC<Props> = ({ src, poster }) => {
  return (
    <div className="rounded-lg">
      <Plyr
        source={{
          type: 'video',
          sources: [{ src, provider: 'html5' }],
          poster: poster ? imageProxy(getIPFSLink(poster)) : src
        }}
        options={{
          controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
          ratio: '16:12'
        }}
      />
    </div>
  );
};

export default memo(Video);