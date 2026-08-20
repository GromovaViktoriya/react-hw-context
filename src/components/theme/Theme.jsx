import {Toggle} from "../toggle/Toggle.jsx";
import s from './Theme.module.css'
import {useContext} from "react";
import Context from "../../contexts/Context.jsx";
import {themes} from "../../constants/constants.js";

export const Theme = () => {
    const [theme] = useContext(Context);

    return (
        <div className={s.Theme}>
            <div className={s.element}>
                <div className={theme === themes.dark ? s.moon : s.sun}></div>
            </div>
            <h1 className={s.title}>Dark/Light</h1>
            <p className={s.text}>Toggle dark or light to customize your interface</p>
            <div className={s.wrapper}><Toggle/></div>
        </div>
    )
}/**/