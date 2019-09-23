import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state ={
      search: ''
    }
  }

  onChangeSearch(e) {
    this.setState({
      search: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Search: ${this.state.search}`);

    this.setState({
      search: ''
    })
  }
  render() {
    return (
      <div style={{marginTop: 10}}>
        <h3>Search for a Smurf</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Summoner Name: </label>
            <input type="text"
                   className="form-control"
                   value={this.state.search}
                   onChange={this.onChangeSearch}
                   />
          </div>
          <div className="form-group">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}