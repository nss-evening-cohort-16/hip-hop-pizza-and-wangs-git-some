const buildDom = () => {
  const domString = `
    <div id="mainContainer">
      <div id="navContainer"></div>
      <div id="revenueContainer"></div>
      <div id="cardContainer"></div>
      <div id="formContainer"></div>
      <div id="landingContainer"></div>
    <div>`;
  document.querySelector('#app').innerHTML = domString;
};

export default buildDom;
