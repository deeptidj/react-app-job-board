import React from 'react';
import axios from 'axios';

class TreeBoard extends React.Component {
  state = {
    trees: []
  };

  componentDidMount() {

    // axios.get('https://data.sfgov.org/resource/tkzw-k3nq.json')
    axios.get('http://localhost:3000/trees')
    //http://localhost:3000/trees
    .then(res => {
      const trees = res.data;
      this.setState({ trees });
    });
  }

  render() {
    return (
        <div>
          <h1>Trees Board</h1>
          <ul>
            {this.state.trees.map(tree =>
                <li key={tree.treeid}>
                  <h2>qspecies {tree.qspecies}</h2>
                  <p>qaddress {tree.qaddress}</p>
                  <p>qsiteinfo: {tree.qsiteinfo}</p>
                  <p>Plat Type: {tree.planttype}</p>
                </li>
            )}
          </ul>
        </div>
    );
  }
}

export default TreeBoard;
