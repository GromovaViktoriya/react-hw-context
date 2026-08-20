import s from './Toggle.module.css'
import {useContext} from "react";
import Context from "../../contexts/Context.jsx";
import {themes} from "../../constants/constants.js";

export const Toggle = () => {
    const [theme, setTheme] = useContext(Context)

    const onChangeTheme = () => {
        if (theme === themes.dark) {
            setTheme(themes.light)
        }
        if (theme === themes.light) {
            setTheme(themes.dark)
        }
    }

    return (
        <label className={s.toggle} htmlFor="toggler">
            <input
                id="toggler"
                type="checkbox"
                onClick={onChangeTheme}
                checked={theme !== themes.dark}
                readOnly
            />
            <span className={s.slider}/>
            <span className={s.wave}/>
        </label>
    )
}

