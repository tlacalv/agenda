import React from 'react';
import Modal from 'react-bootstrap/Modal';
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';
import Button from 'react-bootstrap/Button';

export default function AddEvent({show, handleClose, event, changeTime}) {
  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Añadir evento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TimeRangePicker disableClock onChange={(e)=>changeTime(e)} value={[event.start, event.end]} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
  )
}
