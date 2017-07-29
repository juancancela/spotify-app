import React from 'react';
import PropTypes from 'prop-types';
import Search from '../../components/Search/Search'

class SearchIndex extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tracks : props.tracks
    }
  }
  render() {
    return (
        <Search tracks={this.props.tracks}/>
    );
  }
}

export default SearchIndex
