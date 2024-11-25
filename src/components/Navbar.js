import "../styles/home.css";
import heartIcon from "../assets/heart.svg";
import cartIcon from "../assets/cart.svg";
import logo from "../assets/placeholder.svg";
import searchIcon from "../assets/search.svg";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Parkinsans:wght@300..800&family=Roboto&display=swap');
</style>;

function NavBar() {
  return (
    <div
      className="nav-banner"
      style={{
        fontFamily: `roboto`,
      }}
    >
      <input className="logo" type="image" src={logo} alt="Logo" />
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Collaboration</a>
        </li>
        <li>
          <a href="/">Gallery</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
      </ul>
      <div className="btn-container-home">
        <div className="search-container">
          <input
            className="nav-search"
            type="text"
            placeholder="Search"
            style={{
              backgroundImage: `url(${searchIcon})`,
              backgroundPosition: `10px center`,
              backgroundSize: `25px 25px`,
            }}
          ></input>
        </div>
        <input type="image" src={heartIcon} alt="Heart" />
        <input type="image" src={cartIcon} alt="Cart" />
      </div>
    </div>
  );
}

export default NavBar;
