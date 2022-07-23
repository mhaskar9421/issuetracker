import React from "react";
// child component
export default class IssueRow extends React.Component {
  render() {
    const style = this.props.rowStyle;
    return (
      // <div> Placeholder for IssueRow</div>
      <tr>
        <td style={style}>{this.props.issue_id}</td>
        {/* one way to pass the data fom Parent to child  */}
        {/* <td style ={style}>{this.props.issue_title}</td> one */}
        {/* other way to pass the data from Parent to child */}
        <td style={style}>{this.props.children}</td>
      </tr>
    );
  }
}
