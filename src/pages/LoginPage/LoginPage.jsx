import React from 'react'
import { useForm } from "react-hook-form";
import axios from "axios";
import { fakeAuth } from "../../shared/components/AuthButton/AuthButton";

export const LoginPage = (props) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = formData => {
        console.log('##ABEL## >> formData >>  onSubmit', formData);
        axios.post(process.env.REACT_APP_BACK_URL + 'login', formData).then(res => {
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user', JSON.stringify(res.data.user))
            props.fnSetIsLogged(true);
            console.log('##ABEL## >> res >>  res', res);
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <label htmlFor="email">Email</label>
            <input name="email" id="email" defaultValue="contacto@abelcabezaroman.com"
                   ref={register({ required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}/>
            {/* include validation with required or other standard HTML validation rules */}
            <label htmlFor="password">Password</label>
            <input name="password" id="password" type="password" defaultValue={'ABCedf123'}
                   ref={register({
                       required: true,
                       pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
                   })}/> {/* errors will return when field validation fails  */}
            {/*{errors.exampleRequired && <span>This field is required</span>}*/}

            <input type="submit" value="Login"/>
        </form>
    )
}
