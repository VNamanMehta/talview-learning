import React from "react";

function Contact({email,phone}) {
    return (
        <div className="contact">
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    )
}

export default Contact