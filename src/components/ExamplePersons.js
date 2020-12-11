import React, { useState, useEffect } from "react";
import { Button, Col, Row } from "reactstrap";
import { fetchPersons } from "../api/persons";

const ExamplePersons = ({ ...props }) => {
    // On clicking "Fetch persons" button the list of persons should be fetched
    // Use fetchPersons api call for that purpose.
    // It returns a promise which is either resolved as { persons: [...] }
    // or rejected as { error : "..."}

    // Person object has the following schema:
    // { id: <int>, name: <string>, yearOfBirth: <int>}

    // The unordered list should be populated with elements of the persons
    // with formatted like "person.name - person.age"

    // On clicking "Filter persons item" the list of persons should be filtered
    // so that it contains only persons with 4 letters in their name

    // The "The One" span should element be populated with the name of the person
    // that has age closest to 22

    return (
        <Row>
            <Col xs={2} className="d-flex flex-column justify-content-center">
                <Button color="primary">Fetch persons</Button>
                <Button color="warning" className="mt-2">
                    Filter persons
                </Button>
            </Col>
            <Col className="border-left">
                <h3>Persons</h3>
                <ul>{`List of persons`}</ul>

                <h3>The One</h3>
                <span>{`The One`}</span>
            </Col>
        </Row>
    );
};

export default ExamplePersons;
