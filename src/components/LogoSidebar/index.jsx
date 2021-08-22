import React from "react";
import { BiRocket, BiMenu } from "react-icons/bi";
import styles from "./LogoSidebar.css";

const LogoSidebar = ({ onClickBurger }) => {
    const clickButtonMenu = () => {
        onClickBurger();
    };

    return (
    <div className="logo_content">
        <div className="logo">
            <i><BiRocket/></i>
            <div className="logo_name">Sergio Cabral</div>
        </div>
        <i id="btn" onClick={clickButtonMenu}><BiMenu/></i>
    </div>
)};

export default LogoSidebar;