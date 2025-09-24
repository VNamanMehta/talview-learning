import { useContext } from "react"
import ToastContext from "../Contexts/ToastContext"
import Toast from "./Toast"

function ToastContainer() {
    const {toasts, addToast, removeToast} = useContext(ToastContext)
    const showSuccess = () => {
        addToast('successful', 'success')
    }
    
    const showError = () => {
        addToast('unsuccessful', 'error')
    }
    return (
        <>
            <div>
                {toasts.map((toast) => (
                    <Toast key={toast.id}  toast={toast} onClose={removeToast} />
                )) }
            </div>
            <div>
                <h2>Toast</h2>
                <button onClick={showSuccess}>Success</button>
                <button onClick={showError}>Error</button>
            </div>
        </>
    )
}

export default ToastContainer