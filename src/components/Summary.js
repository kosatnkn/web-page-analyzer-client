import React from 'react';
import { InputGroup } from 'react-bootstrap';

const Report = ({name, summary}) => {
  // --- functions -----------------------------------------------------------------------------------------------------
  const truncateStr = (str) => {
    if(str === undefined) {
      return ""
    }

    let l = 100;
    if(str.length < l) {
      return str;
    }

    return `${str.substring(0, l)}...`
  }

  // --- markup --------------------------------------------------------------------------------------------------------
  return(
    <>
    {summary.map(s => (
      (() => {
          switch (name) {
            case 'a':
              return (
                <InputGroup className="mb-3">
                  {s.external
                    ? (
                      <>
                        <InputGroup.Text><i className="bi bi-check-circle-fill text-success"/></InputGroup.Text>
                        <InputGroup.Text><a href={s.href} target="_blank" rel="noreferrer">{truncateStr(s.href)}</a></InputGroup.Text>
                      </>
                    )
                    : (
                      <>
                        <InputGroup.Text><i className="bi bi-x-circle-fill text-danger"/></InputGroup.Text>
                        <InputGroup.Text>{truncateStr(s.href)}</InputGroup.Text>
                      </>
                    )
                  }
                </InputGroup>
              )
            default:
              return null
          }
        })()
    ))}
    </>
  );
}

// --- exports ---------------------------------------------------------------------------------------------------------
export default Report;
