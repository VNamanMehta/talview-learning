import { useEffect } from "react"

function Toast({toast, onClose}) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose(toast.id)
        }, 3000)

        return () => {
            clearTimeout(timer)
        }
    },[toast.id, onClose])

    return (
        <div>
            {toast.message}
            <button onClick={() => onClose(toast.id)}>&times;</button>
        </div>
    )
}

export default Toast