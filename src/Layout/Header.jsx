import { Link, NavLink } from "react-router";

function Header(){
    return( <>
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">about</Link>
                <Link to="/contact">contact</Link>
                <NavLink to="/products" end 
                className={({ isActive }) =>
                            isActive ? "text-red-500" : "text-black"
                }>Products</NavLink>
            </nav>
        </header>
    </>)

}
export default Header;