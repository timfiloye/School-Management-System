import React, {useState, createContext, useContext, useEffect} from 'react'

export const MyContext = createContext(); 

function UserContext({children}) {
    const [user, setUser] = useState("null");
    const [token, setToken] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log('USE CONTEXT API LOG');

    useEffect(() => {

        const getUser = async () => {
            try {
                const token = localStorage.getItem('token');
                console.log('CONTEXT TOKEN ', token);
                if (token) {
                    setToken(token);
                    setIsAuthenticated(true);
                    }
                const res = await fetch(`/users?token=${token}`);
                const data = await res.json();
                setUser(data.data);
                setLoading(false)
            } catch (error) {
                console.log('CONTEXT ERROR: ', error.message);
            }
            
        }

        getUser()
    }, []);

    const defaultValue = {
        user,
        setUser,
        token,
        setToken,
        isAuthenticated,
        setIsAuthenticated,
        loading,
        setLoading,
        error,
        setError
    }


  return (
    <MyContext.Provider value={defaultValue}>
        {children}
    </MyContext.Provider>
  )
}

export const useUserContext = () => useContext(MyContext);

export default UserContext