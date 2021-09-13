import React,{useState,useContext} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {UserContext} from '../../App'
import M from 'materialize-css'

function SignIn() {
    const {state,dispatch} = useContext(UserContext)
    const history = useHistory()
    // const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const PostData = () =>{
        fetch("/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.error){
                M.toast({html: data.error})
            }
            else{
                localStorage.setItem("jwt",data.token)
                localStorage.setItem("user",JSON.stringify(data.user))
                dispatch({type:"USER",payload:data.user})
                M.toast({html: "Signed in success"})
                history.push('/')
            }
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
        <div className="myCard mt-5 d-flex justify-content-center">
            <div className="card auth-card w-md-25">
                <h2 className="d-flex justify-content-center mt-3">Login</h2>
                <input
                className="mx-5 w-75"
                type="text"
                placeholder="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <input
                className="mx-5 w-75"
                type="password"
                placeholder="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                  <button className="btn waves-effect waves-light mt-5 mx-5 w-75"
                  onClick={()=>PostData()}
                  >
                      SignIn
                </button>
                <h5 className="d-flex justify-content-center mt-5 p-5">
                    <Link to="signup">Don't have an account?</Link>
                </h5>
            </div>
        </div>
    )
}

export default SignIn
