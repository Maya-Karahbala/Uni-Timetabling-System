import React from "react";


import "./App.css";
import lectures from "./Data";

import GridLayout from "react-grid-layout";
import Cell from "./components/Cell";

var layout = [];
var row = 11,
  colums = 9;
for (let i = 0; i < row; i++) {
  for (let j = 0; j < colums; j++) {
    if (i === 0 || j === 0)
      // headers cordinates
      layout.push({
        i: i.toString() + j.toString(),
        x: j,
        y: i + 1,
        w: 1,
        h: 1,
        static: true
      });
  }
}
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      slayout: layout,
      slectures: lectures
    };
  }
  render() {
    const hours = [
      "",
      "09.00-09:50",
      "10:00-10:50",
      "11:00-11:50",
      "12:00-12:50",
      "13:00-13:50",
      "14.00-14.50",
      "15.00-15:50",
      "16:00-16:50",
      "17:00-17:50",
      "18:00-18:50"
    ];
    const headers = this.state.slayout.map(item => {
      //if cell is from (second row) show semester number if cell from first column  show time range
      return item.i < 10 ? (
        <div className="headercell" key={item.i}>
          {" "}
          {item.i % 10}. D{" "}
        </div>
      ) : (
        <div className="headercell" key={item.i}>
          {" "}
          {hours[item.i / 10]}{" "}
        </div>
      );
    });
// geting all cells in jsx format
    const cellsComponents = this.state.slectures.map(lecture => {
      return (
        <div
          key={lecture.code}
          data-grid={{
            x: lecture.academic_term,
            y: (lecture.starting_hour % 9) + 2,
            w: 1,
            h: lecture.Number_of_hours
          }}
        >
          <Cell lecture1={lecture} />
        </div>
      );
    });
    let gridProporities = {
      margin: [5, 5],
      compactType: null,
      preventCollision: true,
      layout: this.state.slayout,
      cols: 12,
     
      rowHeight: 33,
      width: 1200
    };
    return (
      <>

      <GridLayout className="layout" {...gridProporities}>
        <div
          key="a"
          data-grid={{ x: 0, y: 0, w: 9, h: 1, static: true }}
          className="headercell"
        >
          Pazartesi
        </div>
        {headers}
        {cellsComponents}
       
      </GridLayout>
    
       
       </>
    );
  }
}

export default App;
