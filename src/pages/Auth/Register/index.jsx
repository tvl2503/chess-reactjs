import React, { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'
import { isValidEmail, isValidPassword } from '../../../utils/validate'
import { useSelector } from 'react-redux'

import { useNavigate } from 'react-router';
import axios from 'axios';
import "../User.scss"

const Register = () => {
    const user = useSelector(state => state.user.currentUser)
    const navigate = useNavigate();

    useEffect(() => {
        if(user){
            navigate("/")
        }
    }, [user])
    const initialValues = {fullname: "", email: "", password: "", username: ""}
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({fullname: "", email: "", password: "", username: ""})

    const handleChange = ({ currentTarget: input }) => {
        setFormValues({...formValues,[input.name]: input.value })
    }
    const hanldeBlur = (e) => {
        const name = e.target.name
        const error = validate(formValues)
        if(name  === "email"){
            setFormErrors({...formErrors, [name] : error.email})
        }
        else if(name === "fullname"){
            setFormErrors({...formErrors, [name] : error.fullname})

        }
        else if(name === "password"){
            setFormErrors({...formErrors, [name] : error.password})

        }
        else if(name === "username"){
          setFormErrors({...formErrors, [name] : error.username})

      }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("helo");
        try{
          const res = await axios.post('http://localhost:5000/api/register', {}, {params: formValues})
          toast.success(res.data.msg)
 
        }catch(err){
          toast.error("Đã xảy ra lỗi")

        }
        // if(!error){
        //     toast.success("Đăng ký thành công!")
        // }
    }

    const validate = (values) => {
        const errors = {fullname: "", email: "", password: "", username: ""};
        if(!values.fullname){
            errors.fullname = "Vui lòng nhập họ và tên";
        }
        if(!values.email){
            errors.email = "Vui lòng nhập email";
        }
        else if(!isValidEmail(values.email)){
            errors.email = "Vui lòng nhập đúng email!"
        }
        if(!values.password){
            errors.password = "Vui lòng nhập password";
        }
        else if(!isValidPassword(values.password)){
            errors.password = "Mật khẩu ít nhất 6 ký tự!"

        }
        if(!values.username){
            errors.username = "Vui lòng nhập username";
        }
        return errors
    }

  return (
    <div  >

    <div className='login'>
               <div className="login__title">
                   <h1>Đăng Ký</h1>
               </div>
               <div className="login__content">
                   <div className="login__content__form">
                       <form onSubmit={handleSubmit}>
                           <div className="field">
                                <input type="text" 
                                name = "fullname" 
                                value={formValues.fullname} 
                                placeholder='Họ và Tên'  
                                onBlur = {(e) => hanldeBlur(e)}
                                onChange={handleChange}  />  
                                {formErrors.fullname && <p>{formErrors.fullname}</p>}
                           </div>
                           <div className="field">
                                <input type="text" name = "username"  placeholder='Username' 
                                onBlur = {(e) => hanldeBlur(e)} onChange={handleChange}  />
                                {formErrors.username && <p>{formErrors.username}</p>}
                            </div>
                           <div className="field">
                                <input type="text" placeholder='Email' name = "email" value={formValues.email}  
                                onBlur = {(e) => hanldeBlur(e)}  onChange={handleChange} />
                                {formErrors.email && <p>{formErrors.email}</p>}
                            </div>
                           <div className="field">
                                 <input type="password" placeholder='Mật khẩu' name = "password" value={formValues.password} 
                                 onBlur = {(e) => hanldeBlur(e)}  onChange={handleChange}  />
                                 {formErrors.password && <p>{formErrors.password}</p>}
                            </div>
                           
                           <button type = "submit" 
                           disabled = { !isValidEmail(formValues.email) 
                                        || !isValidPassword(formValues.password) 
                                        || !formValues.username 
                                        || !formValues.fullname}
                             >Đăng ký</button>
                       </form>
                       <div className="forgot--password">
                           <Link to = "/auth/login"><i class="fal fa-arrow-left"></i>Đã có tài khoản</Link>
                       </div>
                   </div>
            </div>
    </div>
    </div>
  )
}

export default Register

