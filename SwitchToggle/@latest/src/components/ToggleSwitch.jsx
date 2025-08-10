import { useState } from "react";
import "./ToggleSwitch.css";

export const ToggleSwitch = () => {
    const [isOn, setIsOn] = useState(false);

    const handleBtn = () => {
        setIsOn(!isOn);
    };

    return (

        <div className={`toggle-switch ${isOn ? "on" : "off"}`}
            onClick={handleBtn} >
            <div className="switch">
                <span className="switch-state">{isOn ? "on" : "off"}</span>
            </div>
        </div>

    )
}
