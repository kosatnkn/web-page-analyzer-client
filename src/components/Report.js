import React from 'react';
import { Accordion, Badge, Card } from 'react-bootstrap';
import Summary from './Summary'

const Report = ({content}) => {
  return(
    <>
    <Card>
      <Card.Body>
        <Card.Title>{content.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{content.url}</Card.Subtitle>
        <Badge bg="primary">{content.version}</Badge>
        <hr />
        <Accordion>
        {content.components && content.components.map(c => (
          <>
          <Accordion.Item key={c.name} eventKey={c.name}>
            <Accordion.Header><Badge pill bg="info" text="dark">{c.count}</Badge>&nbsp;<strong>{c.name}</strong></Accordion.Header>
            {c.summary
              ? (
                <Accordion.Body>
                  <Summary name={c.name} summary={c.summary} />
                </Accordion.Body>
              )
              : ""
            }
          </Accordion.Item>
          </>
        ))}
        </Accordion>
      </Card.Body>
    </Card>
    </>
  );
}

// --- exports ---------------------------------------------------------------------------------------------------------
export default Report;
