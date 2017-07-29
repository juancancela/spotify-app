import React from 'react'
import _ from 'lodash'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './TrackListItem.css'

class TrackListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  isTrackAlreadyAdded(id) {
    if (!JSON.parse(localStorage.getItem('favs')))
      return false
    return !_.isEmpty(JSON.parse(localStorage.getItem('favs'))[this.props.track.id])
  }

  addTrackToFavorites() {
    if (_.isEmpty(JSON.parse(localStorage.getItem('favs'))))
      localStorage.setItem('favs', JSON.stringify({}))

    let favs = JSON.parse(localStorage.getItem('favs'))
    favs[this.props.track.id] = this.props.track
    localStorage.setItem('favs', JSON.stringify(favs))
  }

  render() {
    const imageUrl = this.props.track.album.images[0].url;
    const name = this.props.track.name;
    const id = this.props.track.id
    return (
      <li
        key={id}
        className={s.listGroupItem}>
        <div>
          <img style={{'height': '64px', 'width': '64px'}} src={imageUrl}/>
        </div>
        <div>Name:
          <b>{name}</b>
        </div>
        <div>Id: {id}</div>
        <a onClick={() => this.addTrackToFavorites() }>Add to favorites</a>
      </li>
    );
  }

  onInputChange(term) {
    this.setState({term})
    this.props.onSearchTermChange(term)
  }
}

export default withStyles(s)(TrackListItem)
