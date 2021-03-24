import React from 'react'
import {useGlobalContext} from '../Contaext'

const Sidebar = () => {
     const {sidebar, closeSidebar} = useGlobalContext()
    return (
        <aside className={`${sidebar ? 'sidebar show-sidebar': 'sidebar' }`}>
            <div className="sidebar-header">
                <h1 className="logo">LOGO</h1>
                 <button className='close-btn' onClick={closeSidebar}>
                    <i className="fas fa-times"></i>
                </button>
            </div>
            <ul className="links">
                <li><a href="/"></a><i className="fas fa-home"></i> Home</li>
                <li><a href="/"></a><i className="fas fa-user-friends"></i> Team</li>
                <li><a href="/"></a><i className="fas fa-project-diagram"></i> Projects</li>
            </ul>
            
        </aside>
    )
}

export default Sidebar
