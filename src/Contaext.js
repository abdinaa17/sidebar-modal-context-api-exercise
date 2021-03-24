import React, {useState, useContext, createContext} from 'react';

const FinallyContext = createContext();

const AppProvider = ({children}) => {
    const [modal, setModal] = useState(false)
    const [sidebar, setSidebar] = useState(false)
    const openModal = () => {
        setModal(true)
    }
    const closeModal = () => {
        setModal(false)
    }
    const openSidebar = () => {
        setSidebar(true)
    }
    const closeSidebar = () => {
        setSidebar(false)
    }
    return <FinallyContext.Provider value={{
        modal, sidebar, openModal, closeModal, openSidebar, closeSidebar
    }}>
        {children}
    </FinallyContext.Provider>


}

// Create a custom context hook to avoid importing all the time.
export const useGlobalContext = () => {
   return useContext(FinallyContext)
}

export {FinallyContext, AppProvider};