import React from 'react';
import FavoritesIndex from './FavoritesIndex';

const title = 'Spotify - Favorites Page';

function action() {
  return {
    chunks: ['favorites'],
    title,
    component: (
        <FavoritesIndex title={title} />
    ),
    status: 404,
  };
}

export default action;
