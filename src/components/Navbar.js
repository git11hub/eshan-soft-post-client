import React,{useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import{UserContext} from '../App'

function Navbar() {
    const {state,dispatch} = useContext(UserContext)
    const history = useHistory()
    const renderList = () => {
        if(state){
            return [
                <li><Link to="/profile">Profile</Link></li>,
                <li>
                    <button className="btn #c62828 red darken-3"
                    onClick={()=>{
                        localStorage.clear()
                        dispatch({type:"CLEAR"})
                        history.push('/signin')                        
                    }}
                    style={{color:"white"}}
                    >
                        <strong>Logout</strong>
                    </button>
                </li>
            ]
        }else{
            return [
                <li><Link to="/signin">Sign In</Link></li>,
                <li><Link to="/signup">Sign Up</Link></li>
            ]
        }
    }
    return (
        <nav className="">
            <div className="">
            <Link to={state?"/":"/signin"} className="mx-5">Eshan Logo</Link>
            <ul id="nav-mobile" className="right mx-5">
                {renderList()}            
            </ul>
            </div>
        </nav>
    )
}

export default Navbar
