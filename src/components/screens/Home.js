import React,{useState,useEffect,useContext} from 'react'
import {UserContext} from '../../App'

function Home() {
    const [data, setData] = useState([])
    const {state,dispatch} = useContext(UserContext)
    useEffect(()=>{
        fetch('/allpost',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            setData(result.posts)
        })
    },[])

    // happyPost
    const happyPost = (id) => {
        fetch('happy',{
            method:"put",
            headers: {
                "Content-Type": "application/json",
                "Authorization":"Bearer " +localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId:id
            })
        }).then(res=>res.json())
        .then(result=>{
            // console.log(result)
            const newData = data.map(item=>{
                if(item._id==result._id){
                    return result
                }else{
                    return item
                }
            })
            setData(newData)
        }).catch(err => {
            console.log(err)
        })
    }
    // unhappyPost
    const unhappyPost = (id) => {
        fetch('unhappy',{
            method:"put",
            headers: {
                "Content-Type": "application/json",
                "Authorization":"Bearer " +localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId:id
            })
        }).then(res=>res.json())
        .then(result=>{
            // console.log(result)
            const newData = data.map(item=>{
                if(item._id==result._id){
                    return result
                }else{
                    return item
                }
            })
            setData(newData)
        }).catch(err => {
            console.log(err)
        })
    }

    // sadPost
    const sadPost = (id) => {
        fetch('sad',{
            method:"put",
            headers: {
                "Content-Type": "application/json",
                "Authorization":"Bearer " +localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId:id
            })
        }).then(res=>res.json())
        .then(result=>{
            // console.log(result)
            const newData = data.map(item=>{
                if(item._id==result._id){
                    return result
                }else{
                    return item
                }
            })
            setData(newData)
        }).catch(err => {
            console.log(err)
        })
    }
    // unsadPost
    const unsadPost = (id) => {
        fetch('unsad',{
            method:"put",
            headers: {
                "Content-Type": "application/json",
                "Authorization":"Bearer " +localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId:id
            })
        }).then(res=>res.json())
        .then(result=>{
            // console.log(result)
            const newData = data.map(item=>{
                if(item._id==result._id){
                    return result
                }else{
                    return item
                }
            })
            setData(newData)
        }).catch(err => {
            console.log(err)
        })
    }

    // angryPost
    const angryPost = (id) => {
        fetch('angry',{
            method:"put",
            headers: {
                "Content-Type": "application/json",
                "Authorization":"Bearer " +localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId:id
            })
        }).then(res=>res.json())
        .then(result=>{
            // console.log(result)
            const newData = data.map(item=>{
                if(item._id==result._id){
                    return result
                }else{
                    return item
                }
            })
            setData(newData)
        }).catch(err => {
            console.log(err)
        })
    }
    // unangryPost
    const unangryPost = (id) => {
        fetch('unangry',{
            method:"put",
            headers: {
                "Content-Type": "application/json",
                "Authorization":"Bearer " +localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId:id
            })
        }).then(res=>res.json())
        .then(result=>{
            // console.log(result)
            const newData = data.map(item=>{
                if(item._id==result._id){
                    return result
                }else{
                    return item
                }
            })
            setData(newData)
        }).catch(err => {
            console.log(err)
        })
    }

    // like unlike
    const likePost = (id) => {
        fetch('like',{
            method:"put",
            headers: {
                "Content-Type": "application/json",
                "Authorization":"Bearer " +localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId:id
            })
        }).then(res=>res.json())
        .then(result=>{
            // console.log(result)
            const newData = data.map(item=>{
                if(item._id==result._id){
                    return result
                }else{
                    return item
                }
            })
            setData(newData)
        }).catch(err => {
            console.log(err)
        })
    }
    const unlikePost = (id) => {
        fetch('unlike',{
            method:"put",
            headers: {
                "Content-Type": "application/json",
                "Authorization":"Bearer " +localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId:id
            })
        }).then(res=>res.json())
        .then(result=>{
            // console.log(result)
            const newData = data.map(item=>{
                if(item._id==result._id){
                    return result
                }else{
                    return item
                }
            })
            setData(newData)
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div className="home">
            {
                data.map(item=>{
                    return(
                        <div className="card home-card"  style={{width:"750px", margin: "26px auto"}}>
                            <h5>{item.postedBy.name}</h5>
                            <div className="card-image">
                                <img src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"/>

                            </div>
                            <div className="card-content">
                                
                                {item.happy.includes(state._id)?
                                <i style={{cursor:"pointer",color:"green"}} className="material-icons"
                                onClick={()=>{unhappyPost(item._id)}}
                                >mood</i>:
                                <i style={{cursor:"pointer"}} className="material-icons"
                                onClick={()=>{happyPost(item._id)}}
                                >mood</i>
                            }
                                
                                {item.sad.includes(state._id)?
                                <i style={{cursor:"pointer",color:"orange"}} className="material-icons"
                                onClick={()=>{unsadPost(item._id)}}
                                >mood_bad</i>:
                                <i style={{cursor:"pointer"}} className="material-icons"
                                onClick={()=>{sadPost(item._id)}}
                                >mood_bad</i>
                            }
                                
                                {item.angry.includes(state._id)?
                                <i style={{cursor:"pointer",color:"red"}} className="material-icons"
                                onClick={()=>{unangryPost(item._id)}}
                                >mood</i>:
                                <i style={{cursor:"pointer"}} className="material-icons"
                                onClick={()=>{angryPost(item._id)}}
                                >mood</i>
                            }

                                {item.likes.includes(state._id)?
                                <i style={{cursor:"pointer"}} className="material-icons"
                                onClick={()=>{unlikePost(item._id)}}
                                >thumb_down</i>:
                                <i style={{cursor:"pointer"}} className="material-icons"
                                onClick={()=>{likePost(item._id)}}
                                >thumb_up</i>
                            }
                                
                                <h6>{item.happy.length} happy</h6>
                                <h6>{item.sad.length} sad</h6>
                                <h6>{item.angry.length} angry</h6>
                                <h6>{item.likes.length} likes</h6><br/>
                                <h6>{item.title}</h6>
                                <p>{item.body}</p>
                                <input type="text" placeholder="add a comment"/>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default Home
