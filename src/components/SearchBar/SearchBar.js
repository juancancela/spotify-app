import React from 'react'
import Link from '../Link/Link'
import _ from 'lodash'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './SearchBar.css'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term : 'Search...'
    }
  }

  render() {
    return (
      <div className={s.searchBar}>
        <input
          value={this.state.term}
          onChange={(e) => this.onInputChange(e.target.value)}
        />
        <Link className={s.searchButton} to={`/search?q=${this.state.term}`}>
          Search
        </Link>
        <Link className={s.favoritesButton} to={`/favorites`}>
          Favorites
        </Link>
      </div>
    )
  }

  onInputChange(term) {
    this.setState({term})
  }
}

export default withStyles(s)(SearchBar)
