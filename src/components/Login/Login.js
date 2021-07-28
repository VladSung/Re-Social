import React from 'react'
import { connect } from 'react-redux'
import { getLogin } from '../../redux/auth-reducer'
import { Checkbox, TextField, Button } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { Redirect } from 'react-router-dom'

let LoginForm = props => {
    const { register, formState: { errors }, setError, handleSubmit } = useForm();
    const onError = (errors, e) => console.log(errors, e);
    const onSubmit = data => {
        props.getLogin(data)
        let authError = props.authError
        if (authError) {
            setError(authError.field, {
                type: "string",
                message: authError.error,
            });
        }
    }

    if (props.isAuth) return <Redirect to='/profile' />
    return <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div>
            <TextField {...register('email', {
                required: true, minLength: {
                    value: 2
                }
            })} type='email' placeholder='email' />
        </div>
        <div>
            <TextField {...register('password', { required: true })} placeholder='password' />
        </div>
        <div>

            <Checkbox  {...register('rememberMe')} type='checkbox' />запомнить меня
        </div>
        <ErrorMessage errors={errors} name='summaryError' />
        <div>
            <Button size='small' variant='contained' type='submit'>Login</Button>
        </div>
    </form>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    authError: state.auth.authError
})
export default connect(mapStateToProps, { getLogin })(LoginForm);