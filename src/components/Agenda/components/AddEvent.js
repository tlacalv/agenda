import React, { useRef } from "react";
import Modal from "react-bootstrap/Modal";
import TimeRangePicker from "@wojtekmaj/react-timerange-picker";
import Button from "react-bootstrap/Button";
import dayjs from "dayjs";

export default function AddEvent({
  show,
  handleClose,
  event,
  changeTime,
  handleSave,
  setTitle,
}) {
  const title = useRef();
  let { start, end } = event;
  start = dayjs(start);
  end = dayjs(end);

  if (!show) return null;
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Añadir evento</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TimeRangePicker
          clearIcon={null}
          disableClock
          onChange={(e) => changeTime(e, event)}
          value={[start.format("HH:mm"), end.format("HH:mm")]}
        />
        <div>
          <label className="form-label">Nombre</label>
          <input
            className="form-control"
            ref={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
