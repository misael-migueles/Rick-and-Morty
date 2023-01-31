import { useState } from "react";
import validation from "../Form/validation";
import style from "./Form.module.css";
import { Link } from "react-router-dom";


const Form=({login})=>{
    const[userData, setUserData]= useState({
    username:"",
    password:""
    });

    const[errors, setErrors]=useState({
     username:"",
     password:""
    });

    const handleInputChange =(evento)=>{
       setUserData({
        ...userData,
        [evento.target.name]: evento.target.value
       })
       setErrors(validation({
            ...userData,
            [evento.target.name]: evento.target.value
        }))
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        login(userData)
       } 
    return (
        <div className={style.prime}>
        <div className={style.contain}>
        <form className={style.form} onSubmit={handleSubmit}>
          <h2 className={style.form_title}>Iniciar Sesión</h2>
            <p className={style.form_parrafo}>¿Aun no tienes una cuenta? <Link className={style.form_link}>Entrar Aqui</Link></p>
            <hr className={style.hr}></hr>
              <div className={style.form_container}>
                <div className={style.form_group}>
                  <label className={style.form_label} htmlFor="username">UserName:</label>
                  <input className={style.form_input1} type="text" name="username" value={userData.username} onChange={handleInputChange}/>
                  {errors.username && <p className={style.alert_error}>{errors.username}</p>}
                </div>
                   <div className={style.form_group}>
                   <label className={style.form_label} htmlFor="password">Password:</label>
                   <input className={style.form_input1} type="password" name="password" value={userData.password} onChange={handleInputChange}/>
                   {errors.password && <p className={style.alert_error} >{errors.password}</p>}
                </div>
                  <div className={style.action}>
                    <button className={style.btn}>Login</button>
                   
                </div>
            </div>
        </form>
        </div>
   </div>
    )
}

export default Form;


