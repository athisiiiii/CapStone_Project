import { NavLink } from 'react-router-dom';
import '../css/Navbar.css'
const NavBar = () => {
    return (

        <div className='navCenter'><hr/><hr/>
            <NavLink activeClassName="active" style={{ margin: "20px" }} to="/">HOME</NavLink>
            <NavLink activeClassName="active" style={{ margin: "20px" }} to="/appointments/search">SEARCH</NavLink>
            <NavLink activeClassName="active" style={{ margin: "20px" }} to="/appointments/add">ADD</NavLink>
            <NavLink activeClassName="active" style={{ margin: "20px" }} to="/appointments/edit">EDIT</NavLink><hr/><hr/>
        </div>

    )
}

export default NavBar;