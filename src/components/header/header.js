import React, { useState } from 'react'
import axios from "../../axios";
import { Link, Navigate, useNavigate } from 'react-router-dom';
const Header = () => {
    const navigate = useNavigate();
    
    
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light justify-content-between">
            <a class="navbar-brand" href="/">Receipt Finder</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <button onClick={()=>navigate("/favorites")}>
               Favorites
            </button>
           
        </nav>
        
        </>

        )
}

export default Header