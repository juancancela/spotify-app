import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../components/Link/Link'

class HomeIndex extends React.Component {
  render() {
    return (
      <div>
        <Link to="/search">
          Search
        </Link>
        <br />
        <Link to="/favorites">
          Favorites
        </Link>
      </div>
    );
  }
}

export default HomeIndex
