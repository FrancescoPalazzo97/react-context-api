import React from 'react'
import { useAlertContext } from '../contexts/AlertContext'

const Button = () => {

    const { setAlertData } = useAlertContext();

    const addPost = () => {
        setAlertData({
            type: "success",
            message: "Il post è stao aggiunto",
            loader: "inline-block"
        })
        setTimeout(() => {
            setAlertData({
                type: "",
                message: "",
                loader: "d-none"
            })
        }, 3000)
    }
    return (
        <div>
            <button onClick={addPost}>
                Aggiungi post
            </button>
        </div>
    )
}

export default Button
