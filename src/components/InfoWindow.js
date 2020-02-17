import React from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const InfoWindow = function(props) {
  if (!props.stationInfo) return null;
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.stationInfo.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="text-center">
            <Col>
              <p className="card-title h4">
                {props.stationStatus.num_bikes_available}
                <small class="text-muted">
                  <br /> classics
                </small>
              </p>
            </Col>
            <Col>
              <p className="card-title h4">
                {props.stationStatus.num_ebikes_available}
                <small class="text-muted">
                  <br /> ebikes
                </small>
              </p>
            </Col>
            <Col>
              <p className="card-title h4">
                {props.stationStatus.num_docks_available}
                <small class="text-muted">
                  <br /> open docks
                </small>
              </p>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() =>
              props.handleLocationSelection("start", props.stationInfo)
            }
            variant="success"
          >
            Choose as start
          </Button>
          <Button
            onClick={() =>
              props.handleLocationSelection("start", props.stationInfo)
            }
            variant="danger"
          >
            Choose as end
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default InfoWindow;
