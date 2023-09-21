import { useState } from "react";
import React from "react";


function Join(){
    const [id, setId] =useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");

    const onIdHandler = (event) => {
        setId(event.currentTarget.value);
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }
    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    }
    return(
        <div className = "box1">
            <div className ="login_h1_box">
                <h1 className ="login_h1"> 회원가입 <hr/></h1> 
            </div>
            <div className ="input_box">
                <input className="id" type="email" value={id} onChange={onIdHandler} placeholder= "아이디"></input> <br/>
                <input className = "name" type="name" value={name} onChange={onNameHandler }placeholder= "이름" ></input><br/>   
                <input className = "password" type="password" value={password} onChange={onPasswordHandler }placeholder= "비밀번호 입력" ></input><br/>
                <input className = "password" type="password" value={password} onChange={onPasswordHandler }placeholder= "비밀번호 재입력" ></input><br/>
            </div>
            <div>
                <button className="join_btn">가입</button>
            </div>
    </div>
    );
}
export default Join;