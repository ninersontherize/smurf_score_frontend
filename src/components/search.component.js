import React from 'react';
import axios from 'axios';

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state ={
      search: '',
      results_name: '',
      results_summoner_level: '',
      results_tier_rank: '',
      results_win_ratio: '',
      results_total_games: '',
      results_smurf_score: ''
    }
  }

  onChangeSearch(e) {
    this.setState({
      search: e.target.value
    })
  }

  async componentDidMount() {
    await axios.post(`http://localhost:4000/summoner/search/"${this.state.search}"`)
               .then(res => {
                 this.setState({ 
                   results_name: res.data[0].name,
                   results_summoner_level: res.data[0].summoner_level,
                   results_tier_rank: res.data[0].tierRank,
                   results_win_ratio: res.data[0].winratio,
                   results_total_games: res.data[0].total_games,
                   results_smurf_score: res.data[0].smurf_score
                 });
                })
                .catch(function (err) {
                  console.log(err);
                })

  }

  async onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Search: ${this.state.search}`);

    await axios.post(`http://localhost:4000/summoner/search/"${this.state.search}"`)
         .then(res => {
           if (res.data.length == 1) {
             this.setState({ 
               results_name: res.data[0].name,
               results_summoner_level: res.data[0].summoner_level,
               results_tier_rank: res.data[0].tierRank,
               results_win_ratio: res.data[0].winratio,
               results_total_games: res.data[0].total_games,
               results_smurf_score: res.data[0].smurf_score
             });
            } else {
              this.setState({ 
                results_name: res.data.name,
                results_summoner_level: res.data.summoner_level,
                results_tier_rank: res.data.tierRank,
                results_win_ratio: res.data.winratio,
                results_total_games: res.data.total_games,
                results_smurf_score: res.data.smurf_score
              });
            }
         })
         .catch(function (err) {
           console.log(err);
         })

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
        <h3>Summoner Details</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Summoner Name</th>
              <th>Level</th>
              <th>Division</th>
              <th>Win Rate</th>
              <th>Total Games Played</th>
              <th>Smurf Score</th>
            </tr>
          </thead>
          <tbody>
            <tr> 
              <td>{this.state.results_name}</td>
              <td>{this.state.results_summoner_level}</td>
              <td>{this.state.results_tier_rank}</td>
              <td>{this.state.results_win_ratio}</td>
              <td>{this.state.results_total_games}</td>
              <td>{this.state.results_smurf_score}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}