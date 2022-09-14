import '../styles/Login.css'
import { useState } from 'react';
import axios from 'axios';
import {Navigate } from 'react-router-dom';

const Login=({setOder})=>{
    
    const[email, setEmail]= useState('')
    const[password, setPassword]= useState('')
    const [navigate, setNavigate] = useState(false)
   
    const handleUserName=(e)=>{
        console.log(e.target.value);
        setEmail(e.target.value)
    }
    const handlePassword=(e)=>{
     
        setPassword(e.target.value)
    }
const handSubmit=(e)=>{
    e.preventDefault()
    console.log("submitted from---->>");
    axios.post('https://api.storerestapi.com/auth/login',{
       email:email, //marklyan@gmail.com
       password:password //simple_password
    })
  
    .then((response)=>{
    console.log(response.data)
        alert('Đăng nhập thành công')
        setOder('1')
        setNavigate(true)
    })

    .catch((err)=>{
        console.log(err)
        console.log(err.reponse)
        alert('Đăng nhập thất bại')
        setOder('')

    })
}
if(navigate === true){
    return <Navigate to="/"></Navigate>
}

return(
    <section>
          <div className='noi-dung'>

            <div className='form'>
                <h2>Trang đăng nhập</h2>
                <form onSubmit={handSubmit}>
                    <div className='input-form'>
                        <span>Email</span>
                        <input type="text" value={email} onChange={handleUserName}
                            required placeholder='Email Email' name='email' /> <br />
                    </div>
                    <div className='input-form'>
                        <span>Password</span>
                        <input type="password" value={password} onChange={handlePassword}
                            required placeholder='Enter' name='password' /> <br />
                    </div>
                    <div className="input-form">
                        <input type="submit" value="Login" />
                    </div>
                </form>
            </div>
    </div>
    </section>

 
)
}

 export default Login