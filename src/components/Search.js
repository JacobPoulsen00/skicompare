import React from 'react';
import { Redirect } from 'react-router';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {rejse: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({fireRedirect: true});
  }

  render() {
    const { from } = '/';
    const { fireRedirect, rejse } = this.state;

    return (
        <div id="search">
          <form onSubmit={this.handleSubmit}>
            <div id="rejse-search">
              <img id="magnifying-glass" alt="Search" src='img/magnify.svg' />
              <input type="text" id="rejse-search-input" placeholder="Rejsedestination" value={this.state.value} onChange={this.handleChange} />
            </div>
            <input type="submit" value="SEARCH" id="rejse-search-button" />
          </form>
          {fireRedirect && (
            <Redirect to={from || `/rejse/${rejse}`}/>
          )}
        </div>
    );
  }
};

export default Search;
