import React from 'react'
import SearchIndex from './SearchIndex'
import axios from 'axios'
const title = 'Spotify - Search Page'

const SEARCH_TRACKS_URI = 'http://localhost:3090/tracks?q='
const DEFAULT_SEARCH_VALUE = 'Radiohead'

async function action({query}) {
  let tracks = await axios.get(`${SEARCH_TRACKS_URI}${query.q || DEFAULT_SEARCH_VALUE}`)
  tracks = tracks.data.items
  return {chunks: ['search'], title, component: (<SearchIndex title={title} tracks={tracks} />), status: 404};
}

export default action
