import React, {Component} from "react";
class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {hasError: false}
    }

    static getDerivedStateFromError(error) {
        return {hasError: true}
    }
    componentDidCatch(error, errorInfo) {
        console.error("Uncaught Error: ",error, errorInfo)
    }
    render() {
        if (this.state.hasError) {
            return <h2 className="pt-20">Something went wrong try again</h2>
        }
        return this.props.children
    }
}

export default ErrorBoundary