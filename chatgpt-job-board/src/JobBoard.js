import React from 'react';
import axios from 'axios';

class JobBoard extends React.Component {
  state = {
    jobs: []
  };

  componentDidMount() {
    axios.get('https://example.com/jobs')
    .then(res => {
      const jobs = res.data;
      this.setState({ jobs });
    });
  }

  render() {
    return (
        <div>
          <h1>Job Board</h1>
          <ul>
            {this.state.jobs.map(job =>
                <li key={job.id}>
                  <h2>{job.title}</h2>
                  <p>{job.description}</p>
                  <p>Salary: {job.salary}</p>
                  <a href={job.applyLink}>Apply Now</a>
                </li>
            )}
          </ul>
        </div>
    );
  }
}

export default JobBoard;
