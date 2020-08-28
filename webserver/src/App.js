import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: ''
    };
  }

  componentDidMount() {
    fetch('/data', {method: 'GET', headers: {'Content-Type': 'application/json'}})
    .then(res => res.json())
    .then(json => this.setState({data: json.data[0].title}));
  }


  render() {
    return (
      <div>
        Hello React!
        powered by nginx in docker container!
        <hr/>
        data from proxied server: {this.state.data}
      </div>
    );
  }
}

export default App;
