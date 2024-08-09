import React, { useState } from 'react';
import { Form, InputGroup, Button, Row } from 'react-bootstrap';
import { PulseLoader } from 'react-spinners';
import newReportAPI from '../request/report';

const Search = ({apiBaseUrl}) => {
  // --- defaults ------------------------------------------------------------------------------------------------------
  const defaultComponents = ["h1", "h2", "h3", "h4", "h5", "h6", "a", "login"];

  // --- hooks ---------------------------------------------------------------------------------------------------------
  const [url, setURL] = useState("");
  const [report, setReport] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // --- api -----------------------------------------------------------------------------------------------------------
  const ReportAPI = newReportAPI(apiBaseUrl, {});

  // --- functions -----------------------------------------------------------------------------------------------------
  const getReport = async (url, cmp) => {
    const genericErrMsg = "Error occurred while analyzing URL";

    setIsLoading(true);

    const response = await ReportAPI.get(url, cmp);
    if(response.isErr) {
      console.error(response.data);
      setError(genericErrMsg);
      return;
    }

    setError("");
    setReport(response.data);
    setIsLoading(false);
  }

  // --- markup --------------------------------------------------------------------------------------------------------
  return(
    <>
    <Row className="mb-1">
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">URL</InputGroup.Text>
        <Form.Control
          placeholder="http://example.com"
          onChange={(e) => setURL(e.target.value)}
        />
        <Button variant="primary" onClick={() => getReport(url, defaultComponents)}>
          Analyze
        </Button>
      </InputGroup>
    </Row>
    <Row>
      <PulseLoader
        color="#ced4da"
        cssOverride={null}
        loading={isLoading}
        margin={5}
        size={10}
        speedMultiplier={1}
      />
    </Row>
    {error && <strong className="text-danger">{error}</strong>}
    <p>
    </p>
  </>
  );
}

// --- exports ---------------------------------------------------------------------------------------------------------
export default Search;
