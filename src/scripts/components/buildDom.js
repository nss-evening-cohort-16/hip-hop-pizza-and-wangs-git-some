const buildDom = () => {
  const domString = `
    <div id="mainContainer">
        <div id="login-form-container"></div>
        <div id="navContainer"></div>
        <div id="revenueContainer"></div>
        <div id="cardContainer"></div>
        <div id="formContainer"></div>
    <div>`;
  document.querySelector('#app').innerHTML = domString;
};

export default buildDom;
