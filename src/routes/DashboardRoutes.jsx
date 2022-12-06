
import React from "react"
import { Route, Routes } from "react-router-dom"
import { Inicio } from "../pages"
import { Donar } from "../pages/Donar"


export const DashboardRouter = () => {

    

    
    
    return (
      
            <Routes>
                <Route path='/Donar' element={<Donar/>} />
                
                
            </Routes>)
}