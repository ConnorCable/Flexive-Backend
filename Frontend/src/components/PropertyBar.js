import './Components.css'
import React from 'react'


const Propertybar = (props) => {
    return(
        <nav className='navbar' role="navigation" aria-label="main navigation" id="propertynav">

        <div className='navbar-start'>
            <div className='navbar-item is-size-2' id="title">
                Your Investments
            </div>
        </div>

        <div className='navbar-end'>
            <div className="navbar-item has-dropdown is-hoverable mt-1" id="dropdown">
                <div className="navbar-link button is-primary">
                Sort
                </div>

                <div className="navbar-dropdown py-2">
                <div className="navbar-item sort" onClick={props.alphasort}  >
                   Alphabetically 
                </div>
                <hr className="navbar-divider" />
                <div className="navbar-item sort is-light" onClick={props.lowsort}>
                    Investment Low-High
                </div>
                <hr className="navbar-divider"/>
                <div className="navbar-item sort" onClick={props.highsort}>
                    Investment High-Low
                </div>
            </div>
        </div>
            <input className="input is-rounded mt-1" type="text" placeholder="Search" id="search"></input>
        </div>
        
    </nav>
    )
}

export default Propertybar