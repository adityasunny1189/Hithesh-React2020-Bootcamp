import React from "react";
import "./styles.css";
import Button from "./Button"

const App = () => {
    return (
        <div>
            <h1 style = {{textAlign: "center"}}>Hello React!</h1>
            <Button title = "App Store" />
            <Button title = "Play Store" />
        </div>
    )
}

export default App;