import React , {Components} from 'react';
import {MenuItems} from "./MenuItems"

class NavBar extends Components {
    render(){
        <nav className="NavBarItems">
            <h1 className="navbar-logo">FiKa</h1>
            <div className="menu-icon">
                </div>
                <ul>
                    {MenuItems.map((item,index)=> {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url} > {item.title} </a>
                            </li>
                            
                        )
                    })}
                </ul>
        </nav>
    }
}

export default NavBar