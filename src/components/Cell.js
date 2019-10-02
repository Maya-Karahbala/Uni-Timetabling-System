import React, { Component } from "react";
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import lectures from "../Data";
export default class Cell extends Component {
  constructor() {
    super();
    this.toggle_details = this.toggle_details.bind(this);
    this.state = {
      details_is_open: false
    };
  }
  toggle_details() {
    let selectedLecture=lectures.filter(item=>{return item.code==this.props.lecture1.code})[0]
    selectedLecture.AKTS=selectedLecture.AKTS+1
    console.log(selectedLecture)
    console.log()
    this.setState(pre_state => {
      return {
        details_is_open: !pre_state.details_is_open
      };
    });
  }

  render() {
    const {
      code,
      name,
      teacher,
      class1,
      Number_of_hours,
      academic_term,
      starting_hour,
      AKTS
    } = this.props.lecture1;
    return (
      <div className="react-grid-item sml" onDoubleClick={this.toggle_details}>
        <div>{code}</div>
        <div>{name}</div>
        <div>{class1} </div>
        <div>{starting_hour} </div>
        <Modal isOpen={this.state.details_is_open}>
          <ModalHeader> Ders Kodu : {code}</ModalHeader>
          <ModalBody>
            
            <pre>Ders Adı        : {name}</pre>
            <pre>Öğretim Elemanı : {teacher}</pre>
            <pre>Sınıf Adı       : {class1}</pre>
            <pre>AKTS            : {AKTS}</pre>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.toggle_details}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
