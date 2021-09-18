import navLogo from '../../assets/Hip-Hop, Pizza, and Waaangs-logos_transparent.png';

const renderNavbar = () => {
  document.querySelector('#navContainer').innerHTML = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" id="navLogo" href="#"><img src="${navLogo}"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#" id="home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" id="viewOrders">View Orders</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" id="createOrder">Create Order</a>
          </li>
        </ul>
        <div class="nav-item" id="logoutButton">
            </div>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>`;
};

export default renderNavbar;
