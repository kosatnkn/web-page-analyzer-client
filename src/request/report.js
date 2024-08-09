const newReportAPI = (baseUrl, headers) => {
  // define api object to contain constants and functions
  const api = {};

  // --- constants -----------------------------------------------------------------------------------------------------
  api._url = `${baseUrl}/reports`;
  api._headers = {
    "Content-Type": "application/json",
    ...headers
  };

  // --- functions -----------------------------------------------------------------------------------------------------
  // Get report by criteria.
  api.get = async (url, cmp) => {
    const requestOptions = {
      method: "GET",
      headers: {...api._headers},
    };

    let reqURL = `${api._url}?url=${url}&cmp=${JSON.stringify(cmp)}`;

    try {
      const response = await fetch(reqURL, requestOptions);
      if(response.ok) {
        const content = await response.json();
        return {data: content.data, isErr: false};
      }

      const content = await response.json();
      return {data: content.error, isErr: true};
    }
    catch(err) {
      return {data: err, isErr: true};
    }
  }

  // return api object
  return api;
}

// --- export ----------------------------------------------------------------------------------------------------------
export default newReportAPI;
