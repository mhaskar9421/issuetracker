import React from 'react';

class MainContainer extends React.Component {
  render() {
    const continents = ["India","Russia"];
    const helloConti = Array.from(continents, c => `How are you ${c}`);
    const message = helloConti.join('  ');

    return (
      <div title='Outer div'>
        <h1>{message}</h1>
      </div>
    );
  }
}

export default MainContainer;
