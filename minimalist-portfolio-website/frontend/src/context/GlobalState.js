import { createContext, useState } from 'react';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [name, setName] = useState('')

  return (
    <GlobalContext.Provider value={{ isModalOpen, setIsModalOpen, name, setName }}>
      {children}
    </GlobalContext.Provider>
  )
};

export {GlobalContext, GlobalProvider}
  
