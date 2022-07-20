import React from 'react';
import IssueList  from './IssueList';

class MainContainer extends React.Component {
  render() {
    const continents = ["India","Russia"];
    const helloConti = Array.from(continents, c => `How are you ${c}`);
    const message = helloConti.join('  ');

    return (
      // <div title='Outer div'>
         <IssueList/>
      // </div>
    );
  }
}

export default MainContainer;
