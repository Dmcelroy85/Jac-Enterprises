import React from "react";

const Button = (props) => {
    return <button className="button button-primary" onClick={props.callApi}>
        New joke!
    </button>;
}
 
// Export Button Component
export default Button;