import React from 'react'
import TrackListItem from '../TrackListItem/TrackListItem'
import _ from 'lodash'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './TrackList.css'

class TrackList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: props.tracks
    }
  }

  renderTrackItems(tracks){
    return tracks.map((track) => {
        return (
            <TrackListItem
                onTrackSelect={this.props.onTrackSelect}
                key={track.id}
                track={track} />
        )
    })
  }

  render() {
    return (
        <ul className={`${s.trackList} col-md-4 list-group`}>
            {this.renderTrackItems(this.props.tracks)}
        </ul>
    )
  }

  onInputChange(term) {
    this.setState({term})
    this.props.onSearchTermChange(term)
  }
}

export default withStyles(s)(TrackList)
