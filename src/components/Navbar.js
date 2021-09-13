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
                    >
                        Logout
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
        <nav style={{background:"rgba(255, 99, 71, 0.8)"}}>
        <div style={{margin:"auto",width:"50%",}} className="nav-wrapper">
          <Link to={state?"/":"/signin"} className="brand-logo">Eshan Logo</Link>
          <ul id="nav-mobile" className="right">
            {renderList()}            
          </ul>
        </div>
      </nav>
    )
}

export default Navbar
