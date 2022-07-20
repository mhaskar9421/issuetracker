import React from 'react';

class IssueFilter extends React.Component {
    render() {
            return(
                <div> Placeholder for Issue filter.</div>
        )
    }
}

class IssueTable extends React.Component {
    render() {
            return(
                <div> Placeholder for Issue table.</div>
        )
    }
}

class IssueAdd extends React.Component {
    render() {
            return(
                <div> Placeholder for Issue Add.</div>
        )
    }
}

const exportedObject = {
    IssueAdd,
    IssueFilter,
    IssueTable
};

export default exportedObject;

//export default {IssueAdd, IssueFilter, IssueTable};