import React from 'react'
import Menu from './menuapi'

const Navbar = ({ filteritem, menu }) => {
    return (
        <>
            <nav className='navbar'>
                <div className='btn-group'>
                    {
                        menu.map((ele) => {
                           return <button className="btn-group__item" onClick={() => filteritem(ele)}>{ele}</button>

                        })
                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar