import React, { Component } from 'react';
import * as d3 from "d3";
// var TreeBoxes = require("./d3_charts_supports/Donut3D");

import TreeBoxes from "./d3_charts_supports/tree-boxes.js";
import './App.css'

class App extends Component {

  constructor(props){
    super(props);
    this.randomData = this.randomData.bind(this);

    this.state = {
      salesData: [
      	{label:"Smartek21", value: 35, color:"#3366CC"},
      	{label:"TCS", value: 20, color:"#DC3912"},
        {label:"CTS", value: 30, color:"#FF9900"},
        {label:"Infosys", value: 15, color:"#990099"}
      ]
    };
  }

  componentDidMount(){
    d3.json("/data-example.json", function(error, json) {
      TreeBoxes.treeBoxes('', json.tree);
    });
  }

  randomData(){
   return this.state.salesData.map(function(data){
     return {label: data.label, value: data.value, color: data.color};});
 }

  render() {

    return (
      <div>
        <ct-visualization id="tree-container" />
      </div>
    );
  }
}

export default App;
