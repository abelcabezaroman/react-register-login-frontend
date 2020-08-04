import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';

export const RegisterPage = () => {
    const { register, handleSubmit } = useForm();

    console.log('##ABEL## >> process.env.URL >>  RegisterPage', process.env.REACT_APP_BACK_URL);
    const onSubmit = formData => {
        console.log('##ABEL## >> formData >>  onSubmit', formData);
        axios.post(process.env.REACT_APP_BACK_URL + 'register', formData).then(res => {
            console.log('##ABEL## >> res >>  res', res);
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <label htmlFor="email">Email</label>
            <input name="email" id="email" defaultValue="sky-hell@hotmail.es"
                   ref={register({ required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}/>

            <label htmlFor="username">Username</label>
            <input name="username" id="username" ref={register({ required: true, minLength: 4 })}/>

            {/* include validation with required or other standard HTML validation rules */}
            <label htmlFor="password">Password</label>
            <input name="password" id="password" type="password"
                   ref={register({ required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/ })}/>
            {/* errors will return when field validation fails  */}
            {/*{errors.exampleRequired && <span>This field is required</span>}*/}

            <input type="submit" value="Register"/>
        </form>
    )
}
