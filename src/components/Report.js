const Report = ({content}) => {
  return(
    <>
      <p>{content.url}</p>
      <p>{content.version}</p>
      <p>{content.title}</p>
    </>
  );
}

// --- exports ---------------------------------------------------------------------------------------------------------
export default Report;
