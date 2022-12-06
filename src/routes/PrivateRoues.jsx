import { useContext } from "react"
import { Navigate } from "react-router-dom"
import {AuthContext} from '../context/AuthContext'

export const PrivateRoutes = ({children}) => {
  const {user, isLogged} = useContext(AuthContext);


  return user.logged || isLogged
          ? <Navigate to='/Donar' />
          : children
}
//