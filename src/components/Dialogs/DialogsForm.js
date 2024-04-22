import React from 'react';
import { useForm } from "react-hook-form";

import styles from './dialogs.module.css'
import { Button, TextField } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';

let DialogsForm = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        props.sendMessage(data.messageBody)
    }
    return (
        <form className={styles.newMessage} onSubmit={handleSubmit(onSubmit)}>
            <TextField
                {...register('messageBody', { required: true })}
                variant='standard'
                InputProps={{
                    style: {
                        color: "#ffff"
                    }
                }}
                className={styles.messageInput}
                multiline
                placeholder='Введите сообщение...'>
            </TextField>
            <Button type='submit'
                disabled={errors.messageBody}
                className={errors.messageBody ? `${styles.button} ${styles.disabledButton}` : styles.button}>
                <SendIcon />
            </Button>
        </form>
    );
}



export default DialogsForm;