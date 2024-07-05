import { getToken, removeToken, serviceURL, setToken } from "../../../utils"
import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { isExpired, decodeToken } from "react-jwt"

export const AuthProvider = ({children}) => {
    const token = getToken()
    
    const logout = () => removeToken()
  
    const value = useMemo(() => {
      const user = decodeToken(token || "")
      const isAuthenticated = !isExpired(token || "")
      return {
        token,
        user,
        Login,
        isAuthenticated,
        logout
      }
    }, [token])
  
    return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    )
  }