import './NavCss.css'

function NavBar(){
    return <div>
<nav>
      <input type="checkbox" id="check"/>
      <label  className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <label className="logo">GO GREEN.CO</label>
      <ul>
        <li><a className="active" href="#">Home</a></li>
        <li><a href="#">Login</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Cart</a></li>
        <li><a href="#">Feedback</a></li>
      </ul>
    </nav>
    </div>
}

export default NavBar;