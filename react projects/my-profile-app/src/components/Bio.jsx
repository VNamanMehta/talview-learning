import React from "react";

function Bio({biotext}) {
    return (
        <div className="app-container">
            <h2>About Me</h2>
            <p>{biotext}</p>
        </div>
    )
}

export default Bio