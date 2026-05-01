import {  NavLink } from "react-router";
import { useEffect, useState } from "react";
import { API_URL } from "../config.js";
 
function Menu(){

const [menu, setMenu] = useState([])

useEffect(()=>{
    const getMenu = async()=>{
        const res = await fetch(`${API_URL}/menu`);
        const data = await res.json();
        setMenu(data);
    }
    getMenu();
},[])

    return (
        <nav>
            {
                menu.map( item => (<NavLink className={ ({ isActive }) => ( isActive ? 'active': "box") } key={item.id} to={item.path}> {item.name} </NavLink>) )
            }
        </nav>
    )
  

}
export default Menu;