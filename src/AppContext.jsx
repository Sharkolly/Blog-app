import React, { useContext } from 'react'
import { AppContextApi } from './ContextApi'


const AppContext = () => { 
  const { username } = useContext(AppContextApi);
    
  return (
      <div>
          { username }
    </div>
  )
}

export default AppContext