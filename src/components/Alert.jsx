import React from 'react'
import { useAlertContext } from '../contexts/AlertContext'

const Alert = () => {

    const { alertData } = useAlertContext();

    const { type, message, loader } = alertData;

    return (
        <>
            <div className={`alert alert-type-${type}`}>
                {message}
                <span class={`loader ${loader}`}></span>
            </div>
        </>
    )
}

export default Alert
