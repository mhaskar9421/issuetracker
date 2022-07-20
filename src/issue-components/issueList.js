import React from 'react';
import IssueFilter from './issue-sub-component/issueTrack';
import IssueTable from './issue-sub-component/issueTable';
import IssueAdd from './issue-sub-component/issueAdd';

class IssueList extends React.Component {
    render() {
    //   const continents = ["India","Russia"];
    //   const helloConti = Array.from(continents, c => `How are you ${c}`);
    //   const message = helloConti.join('  ');
  
      return (
      <React.Fragment>
        <h1>IssueTracker</h1>
        <IssueFilter />
         <IssueTable />
        <IssueAdd /> 
      </React.Fragment>
      );
    }
  }
  
  export default IssueList;