import React from "react";
import {BrowserRouter as Router,
        Switch,
        Route } from "react-router-dom";
import styles from "./ContentSidebar.css";
import {MI_PERFIL,
        EDUCACION,
        EXPERIENCIA,
        HOBBIES } from "../../constants/routes";
import MiPerfilView from "../../views/MiPerfilView";
import HobbiesView from "../../views/HobbiesView";
import EducacionView from "../../views/EducacionView";
import ExperienciaView from "../../views/ExperienciaView";

const ContentSidebar = () => (
    <div className="content">
        <Switch>
            <Route path={MI_PERFIL}>
                <MiPerfilView />
            </Route>
            <Route path={EDUCACION}>
                <EducacionView />
            </Route>
            <Route path={EXPERIENCIA}>
                <ExperienciaView />
            </Route>
            <Route path={HOBBIES}>
                <HobbiesView />
            </Route>
        </Switch>
    </div>
);

export default ContentSidebar;