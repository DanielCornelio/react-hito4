import { createContext, useCallback, useState, useEffect } from "react";

export const UserContex = createContext();

const UserProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token')  : null);
    const [user, setUser] = useState(localStorage.getItem('email') ? { email: localStorage.getItem('email') } : null)

    const auth = async (email, password) => {
        try {
            const response = await fetch('http://localhost:5001/api/auth/login',
                {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({ email, password}                        
                    )
                })

            const data = await response.json()
           
            if (data.token) {
                setToken(data.token);
                setUser({email: data.email});
                localStorage.setItem("token", data.token)
                localStorage.setItem("email", data.email)
                return data
            }else{
                throw new Error ('Credenciales incorrectas')
            }
        } catch (error) {
            throw errror
        }
    }



    const isLogIn = ()=>{
        return token
    }

    const getProfile = useCallback(async () => {
        try {
          const res = await fetch("http://localhost:5000/api/auth/me", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
    
          const data = await res.json();
          if (data.email) {
            setUser({ email: data.email });
            localStorage.setItem("email", data.email);
          }
        } catch (error) {
          console.error("Error al obtener perfil:", error.message);
        }
      }, [token]); // Dependemos de 'token' porque la API requiere el token para obtener el perfil.
    
      useEffect(() => {
        if (token && !user) {
          getProfile();
        }
      }, [token, user, getProfile]);


      const register = async ( email, password ) => {
        try {
          const res = await fetch("http://localhost:5001/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          });
      
          const data = await res.json();
          console.log("Respuesta del backend (register):", data);
      
          if (data.token) {
            setToken(data.token);
            setUser({ email: data.email });
            localStorage.setItem("token", data.token);
            localStorage.setItem("email", data.email);
            return data;
          } else {
            throw new Error("No se pudo registrar");
          }
        } catch (error) {
          console.error("Register error:", error.message);
          throw error;
        }
      };


    const logout = () => {
        setToken("")
        setUser(null)
        localStorage.removeItem('token');
        localStorage.removeItem('email');

    }

    const globalUserState = {
        token,
        logout,
        auth,
        getProfile,
        user,
        register,
        isLogIn
    }
    return <UserContex.Provider value={globalUserState}>{children}</UserContex.Provider>
}

export default UserProvider;