import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import TrackList from '../TrackList/TrackList'
import _ from 'lodash'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Search.css'
import axios from 'axios'

const SEARCH_TRACKS_URI = 'http://localhost:3090/tracks?q='

class Search extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tracks : this.props.tracks
    }
  }

  render() {
    const {title, html} = this.props;
    return (
      <div className={s.searchPageContainer}>
        <SearchBar onSearchTermChange={this.trackSearch}/>
        <TrackList
          tracks={this.props.tracks}/>
      </div>
    )
  }
}

export default withStyles(s)(Search)
