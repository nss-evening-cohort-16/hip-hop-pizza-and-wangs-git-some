const addShowButton = (isAdmin) => {
  if (isAdmin === true) {
    const domString = `<button type="button" class="btn btn-success" id="addNewShow">Create a New Show</button>
    `;
    document.querySelector('#showBtnContainer').innerHTML = domString;
  }
};

export default addShowButton;
