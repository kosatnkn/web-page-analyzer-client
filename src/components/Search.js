import React, { useState } from 'react';
import { Form, InputGroup, Button, Row, Alert } from 'react-bootstrap';
import { PulseLoader } from 'react-spinners';
import validator from 'validator'
import newReportAPI from '../request/report';
import Report from "./Report";

const Search = ({apiBaseUrl}) => {
  // --- defaults ------------------------------------------------------------------------------------------------------
  const genericErrMsg = "Error occurred while analyzing URL";
  const defaultComponents = ["h1", "h2", "h3", "h4", "h5", "h6", "a", "login"];

  // --- hooks ---------------------------------------------------------------------------------------------------------
  const [url, setURL] = useState("");
  const [report, setReport] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // --- api -----------------------------------------------------------------------------------------------------------
  const ReportAPI = newReportAPI(apiBaseUrl, {});

  // --- functions -----------------------------------------------------------------------------------------------------
  const getReport = async (url, cmp) => {
    setReport(null)
    setError("");

    if(!isValidURL(url)) {
      setError("Provided value is not a valid URL");
      setIsLoading(false);

      return;
    }

    setIsLoading(true);
    const response = await ReportAPI.get(url, cmp);
    if(response.isErr) {
      console.error(response.data); // TODO: debug, remove later
      setError(genericErrMsg);
      setIsLoading(false);

      return;
    }

    setError("");
    setIsLoading(false);
    setReport(response.data);
  }

  const isValidURL = (url) => {
    let options = {
      protocols: ['http','https'],
      require_tld: true,
      require_protocol: true,
      require_host: true,
      require_port: false,
      require_valid_protocol: true,
      allow_underscores: false,
      host_whitelist: false,
      host_blacklist: false,
      allow_trailing_dot: false,
      allow_protocol_relative_urls: false,
      allow_fragments: true,
      allow_query_components: true,
      disallow_auth: false,
      validate_length: true
    }

    return validator.isURL(url, options);
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
    {error && <Alert variant="danger">{error}</Alert>}
    {report && <Report content={report} />}
  </>
  );
}

// --- exports ---------------------------------------------------------------------------------------------------------
export default Search;
