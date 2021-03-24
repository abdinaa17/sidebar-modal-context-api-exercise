import React from 'react'
import {useGlobalContext} from '../Contaext'

const Modal = () => {
    const {modal, closeModal} = useGlobalContext()
    return (
        <div className={`${modal ? 'modal-overlay show-modal' :'modal-overlay'}`}>
            <div className="modal-container">
                <h3>Modal Content</h3>
                <button className='close-modal-btn' onClick={closeModal}>
                    <i className="fas fa-times"></i>
                </button>
            </div>
            
        </div>
    )
}

export default Modal
