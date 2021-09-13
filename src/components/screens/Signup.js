import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'

function Signup() {
    const history = useHistory()
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const PostData = () =>{
        fetch("http://localhost:5000/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                M.toast({html: data.error})
            }
            else{
                M.toast({html: data.message})
                history.push('/signin')
            }
        }).catch(err=>{
            console.log(err)
        })
    }


    return (
        <div  className="myCard mt-5 d-flex justify-content-center">
            <div className="card auth-card w-md-25">
                <h2 className="d-flex justify-content-center mt-3">Register</h2>
                <input
                className="mx-5 w-75"
                type="text"
                placeholder="name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
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
                  <button className="btn waves-effect waves-light mx-5 w-75"
                  onClick={()=>PostData()}
                  >
                      Signup
                </button>
                <h5 className="d-flex justify-content-center  mt-5 p-5">
                    <Link to="signin">Already have an account?</Link>
                </h5>
            </div>
        </div>
    )
}

export default Signup
