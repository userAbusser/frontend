import React, { useState } from 'react'
import './css/LoginSignup.css'
const LoginSignup = () => {
  const [state, setState] = useState("Увійти");   
const [formData,setFormData] = useState({
  username: "",
  password:"",
  email:""
})

const changeHandler = (e)=>{
setFormData({...formData,[e.target.name]:e.target.value})
}

  const login=async ()=>{
console.log("Login function executed", formData);
let responseData;
    await fetch('http://localhost:4000/login', {
      method: "POST",
      headers: {
        'Accept':'/application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }

  }

  const signUp  = async () =>{
    console.log("Signup function executed", formData);
    let responseData;
    await fetch('http://localhost:4000/signup', {
      method: "POST",
      headers: {
        'Accept':'/application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }


   return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
        {state==="Зареєструватися"? <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder="Введіть ім'я" />:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="text" placeholder='Введіть email' />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Введіть пароль' />
        </div>
        <button onClick={()=>{state==="Увійти" ? login(): signUp()}}>Продовжити</button>
        {state==="Зареєструватися"
        ?<p className="loginsignup-login">Вже маєте акаунт?<span onClick={()=>{setState("Увійти")}}> Увійдіть тут</span></p>
      :<p className="loginsignup-login">Бажаєте створити акаунт?<span onClick={()=>{setState("Зареєструватися")}}> Натисніть тут</span></p>}
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>Продовжуючи я приймаю умови використання та прайват полісі</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup;