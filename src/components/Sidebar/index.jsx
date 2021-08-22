import React, { useState } from "react";
import styles from "./Sidebar.css";
import { BiGrid, BiUser, BiCodeAlt, BiBasketball } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa";
import { Link } from "react-router-dom";
import ContentSidebar from "../ContentSidebar/";
import ProfileSidebar from "../ProfileSidebar/";
import LogoSidebar from "../LogoSidebar/";
import {
    MI_PERFIL,
    EDUCACION,
    EXPERIENCIA,
    HOBBIES,
} from "../../constants/routes";

const Sidebar = () => {
    const [active, setActive] = useState(false);

    const handleClickBurger = () => {
        setActive(!active);
    };

    return (
        <React.Fragment>
            <div className={`sidebar${active ? ' active' : ''}`}>
                <LogoSidebar onClickBurger={handleClickBurger}/>

                <ul className="nav_list">
                    <li>
                        <Link to={MI_PERFIL}>
                            <i>
                                <BiUser />
                            </i>
                            <span className="links_name"> Mi Perfil</span>
                        </Link>
                        <span className="tooltip">Mi Perfil</span>
                    </li>
                    <li>
                        <Link to={EDUCACION}>
                            <i>
                                <FaUserGraduate />
                            </i>
                            <span className="links_name"> Educacion</span>
                        </Link>
                        <span className="tooltip">Educacion</span>
                    </li>
                    <li>
                        <Link to={EXPERIENCIA}>
                            <i>
                                <BiCodeAlt />
                            </i>
                            <span className="links_name"> Experiencia</span>
                        </Link>
                        <span className="tooltip">Experiencia</span>
                    </li>
                    <li>
                        <Link to={HOBBIES}>
                            <i>
                                <BiBasketball />
                            </i>
                            <span className="links_name"> Hobbies</span>
                        </Link>
                        <span className="tooltip">Hobbies</span>
                    </li>
                </ul>

                <ProfileSidebar />
            </div>
            <ContentSidebar />
        </React.Fragment>
    );
};

export default Sidebar;
