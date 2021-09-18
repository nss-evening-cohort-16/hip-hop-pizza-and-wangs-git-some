const clearDom = () => {
  document.querySelector('#cardContainer').innerHTML = '';
  document.querySelector('#formContainer').innerHTML = '';
  document.querySelector('#landingContainer').innerHTML = '';
  document.querySelector('#revenueContainer').innerHTML = '';
  document.querySelector('#dropdownContainer').style.display = 'none';
  document.querySelector('#upcomingShowContainer').innerHTML = '';
};

export default clearDom;
