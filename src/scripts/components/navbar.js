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
          <li class="nav-item">
<<<<<<< HEAD
          <a class="nav-link" href="#" id="viewShows">Upcoming Shows</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#" id="createNewShow">Create New Upcoming Show</a>
      </li>
=======
          <div id="dropdownContainer"><select class="form-select" aria-label="Open/Close Filter" id="orderStatusFilter">
          <option value="open">Open</option>
          <option value="closed">Closed</option>
          <option value="all">All Orders</option>
          </select></div>
          </li>
>>>>>>> main
        </ul>
        <div class="nav-item" id="logoutButton">
            </div>
        <form class="d-flex" id="searchBar">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="searchInput">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>`;
};

export default renderNavbar;
