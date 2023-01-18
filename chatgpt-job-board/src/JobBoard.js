import React from 'react';
import axios from 'axios';

class JobBoard extends React.Component {
  state = {
    jobs: []
  };

  componentDidMount() {
    axios.get('https://data.sfgov.org/resource/tkzw-k3nq.json')
    .then(res => {
      const jobs = res.data;
      this.setState({ jobs });
    });
  }

  render() {
    return (
        <div>
          <h1>Tree Board from SF Data Gov</h1>
          <ul>
            {this.state.jobs.map(job =>
                <li key={job.treeid}>
                  <h2>qspecies {job.qspecies}</h2>
                  <p>qaddress {job.qaddress}</p>
                  <p>qsiteinfo: {job.qsiteinfo}</p>
                  <p>Plat Type: {job.planttype}</p>
                </li>
            )}
          </ul>
        </div>
    );
  }
}

export default JobBoard;
