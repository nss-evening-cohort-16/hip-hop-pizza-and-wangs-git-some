const clearDom = () => {
  document.querySelector('#cardContainer').innerHTML = '';
  document.querySelector('#formContainer').innerHTML = '';
  document.querySelector('#landingContainer').innerHTML = '';
  document.querySelector('#revenueContainer').innerHTML = '';
  document.querySelector('#upcomingShowContainer').innerHTML = '';
  document.querySelector('#dropdownContainer').style.display = 'none';
};

export default clearDom;
