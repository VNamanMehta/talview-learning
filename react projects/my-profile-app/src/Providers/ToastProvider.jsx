import { useCallback, useRef, useState } from "react"
import ToastContext from "../Contexts/ToastContext"

function ToastProvider({children}) {
    let id = useRef(1)
    const [toasts, setToasts] = useState([])

    const addToast = useCallback((message, type='info') => {
        const newToast = {
            id: id.current++,
            message,
            type,
        }
        setToasts(prevToast => [...prevToast, newToast])
    }, [])

    const removeToast = useCallback((id) => {
        setToasts(prevToast => prevToast.filter(toast => toast.id !== id))
    },[])

    const value = {toasts, addToast, removeToast}

    return (
        <ToastContext.Provider value={value} >
            {children}
        </ToastContext.Provider>
    )
}

export default ToastProvider