import React from "react";
import IssueRow from "./issueRow";

export default class IssueTable extends React.Component {
  render() {
    const rowStyle = { border: "1px solid silver", padding: 4 };
    return (
      // <div> Placeholder for Issue table.</div>
      <table style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={rowStyle}>ID</th>
            <th style={rowStyle}>Title</th>
          </tr>
        </thead>
        <tbody>
          {/* <IssueRow rowStyle = {rowStyle} issue_id = {1} issue_title="Added IssueRow 1"/>
                    <IssueRow rowStyle = {rowStyle} issue_id = {2} issue_title="Added IssueRow 2"/> */}
          {/* anotehr way to pass the data by adding HTML tags inside React component */}
          <IssueRow rowStyle={rowStyle} issue_id={1}>
            <div>Added IssueRow 1</div>
          </IssueRow>
          <IssueRow rowStyle={rowStyle} issue_id={2}>
            <div>Added IssueRow 2</div>
          </IssueRow>
        </tbody>
      </table>
    );
  }
}
