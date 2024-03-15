import React from "react";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";




const ErrorMsg = () => {
    return (
        <div>
            <h1>Oops, page not found.</h1>
            <Link to='./'>Back Home</Link>
        </div>

    )
}

export default ErrorMsg;