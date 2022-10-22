import { useState ,  createContext} from "react";


export const UserContext = createContext();


export const UserProvider = ({children}) => {
    const [logedIn, setLogedIn] = useState(false);
  return (
    <UserContext.Provider value={[logedIn,setLogedIn]}>
        {children}
    </UserContext.Provider>
  )
}
