import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Favorites.css'
import _ from 'lodash'

class Favorites extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      favs: []
    }
  }

  componentDidMount() {
    this.setState({
      favs: JSON.parse(localStorage.getItem('favs'))
    })
  }

  removeTrackFromFavorites(id) {
    let updatedFavs = _.clone(this.state.favs)
    delete updatedFavs[id]
    this.setState({favs : updatedFavs})
    localStorage.setItem('favs', JSON.stringify(updatedFavs))
  }

  renderFavs() {
    return Object.keys(this.state.favs).map((id) => {
        let fav = this.state.favs[id]
        let imageUrl = fav.album.images[0].url;
        let name = fav.name;
        let favId = fav.id
        return (
          <li key={favId} className={s.listGroupItem}>
            <div>
              <img style={{'height': '64px','width': '64px'}} src={imageUrl}/>
            </div>
            <div>Name:
              <b>{name}</b>
            </div>
            <div>Id: {favId}</div>
            <a onClick={() => this.removeTrackFromFavorites(favId) }><b>Remove</b></a>
          </li>
        )
      })
  }

  render() {
    const {title, html} = this.props
    if (_.isEmpty(this.state.favs)) {
      return (
        <div>Loading...</div>
      )
    }
    return (
      <div>
        <div><h1>Lista de favoritos</h1></div>
        <div>
          {this.renderFavs()}
        </div>
      </div>
    )
  }
}

export default withStyles(s)(Favorites)
