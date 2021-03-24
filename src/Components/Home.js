import React from 'react'
import {useGlobalContext} from '../Contaext'


const Home = () => {
    const {openModal, openSidebar} = useGlobalContext()
    return (
        <main>
            <button className='sidebar-toggle' onClick={openSidebar}>
                <i className="fas fa-bars"></i>
            </button>
            <button className="btn" onClick={openModal}>Show Modal</button>
        </main>
    )
}

export default Home
