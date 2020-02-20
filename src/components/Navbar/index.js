import React,{ useState } from 'react'
import {Link} from 'react-router-dom'
import './style.css'

export default function Navbar() {
    
    const [search,setSearch] = useState(false);
    
    const openSearch = ()=>{
        setSearch(true)
    }

    const searchSubmit =(e)=>{
        e.preventDefault();
        alert("search")
    }
   const  searchClass = search?'searchInput active':'searchInput';
    return (
        <div className="navBar">
            <ul className="navbarMenu">
               <li><Link to="/">Home</Link></li>
               <li><Link to="/about">About US</Link></li>
               <li><Link to="/post">Posts</Link></li>
               <li><Link to="contact">Contact Us</Link></li>
            </ul>  
            <div className="searchBar">
                <form onSubmit={searchSubmit}>
                    <input className={searchClass} type="text" placeholder="search"/>
                    <img onClick={openSearch} className="searchIcon"src={require('../../assets/icons/search.png')} alt="loading"/> 

                </form>
            </div> 
        </div>
    )
}
