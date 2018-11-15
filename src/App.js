import React, { Component } from 'react';
import * as d3 from "d3";
import TreeBoxes from "./d3_charts_supports/tree-boxes.js";
import './App.css'

class App extends Component {

  constructor(props){
    super(props);
  }

  render() {

    const treeContainer = this.refs.treeContainer;
    if(treeContainer === undefined){
      d3.json("/data.json", function(error, json) {
        TreeBoxes.treeBoxes('', json);
      });
    }

    return (
      <div id="tree-container" ref="treeContainer" />
    );
  }
}

export default App;
