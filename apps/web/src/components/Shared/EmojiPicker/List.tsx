import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { STATIC_ASSETS_URL } from 'data/constants';
import Errors from 'data/errors';
import type { FC } from 'react';
import type { Emoji } from 'src/types';
import { ErrorMessage } from 'ui';

import Loader from '../Loader';

interface Props {
  setEmoji: (emoji: string) => void;
}

const List: FC<Props> = ({ setEmoji }) => {
  const { isLoading, error, data } = useQuery(['emojisData'], () =>
    axios({
      url: `${STATIC_ASSETS_URL}/emoji.json`
    }).then((res) => res.data)
  );

  if (error) {
    return (
      <ErrorMessage
        className="m-5"
        title={Errors.SomethingWentWrong}
        error={{
          message: 'Error while loading emojis',
          name: Errors.SomethingWentWrong
        }}
      />
    );
  }

  if (isLoading) {
    return <Loader message={`Loading emojis`} />;
  }

  return (
    <div className="max-h-[20rem] overflow-y-auto p-5 grid grid-cols-7 text-lg">
      {data.map((emoji: Emoji) => (
        <button
          className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg py-1"
          key={emoji.emoji}
          type="button"
          onClick={() => setEmoji(emoji.emoji)}
        >
          {emoji.emoji}
        </button>
      ))}
    </div>
  );
};

export default List;
