import React, { Component } from 'react';
import { CSVLink, CSVDownload } from "react-csv";

export class csv extends Component {
    
   
  render() {
    const csvData = [
        ["firstname", "lastname", "email"],
        ["Ahmed", "Tomi", "ah@smthing.co.com"],
        ["Raed", "Labes", "rl@smthing.co.com"],
        ["Yezzi", "Min l3b", "ymin@cocococo.com"]
      ];
    return (
      <div>

<CSVLink data={csvData}>Download me</CSVLink>;

<CSVDownload data={csvData} target="_blank" />;
      </div>
    )
  }
}

export default csv