import React from 'react';
import HomeIndex from './HomeIndex';

const title = 'Spotify - Home Page';

function action() {
  return {
    chunks: ['home'],
    title,
    component: (
        <HomeIndex title={title} />
    ),
    status: 404,
  };
}

export default action
