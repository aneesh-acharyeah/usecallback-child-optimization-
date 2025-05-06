import React from "react";

const Button = React.memo(({ handleClick, label }) => {
    console.log(`Rendering: ${label}`);
    return (
        <button onClick={handleClick} style={{ padding: "10px", margin: "10px" }}>
            {label}
        </button>
    )


})

export default Button;