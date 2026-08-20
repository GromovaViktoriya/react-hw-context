import './App.css'
import Context from "./contexts/Context.jsx";
import {useEffect, useState} from "react";
import {themes} from "./constants/constants.js";
import {Theme} from "./components/theme/Theme.jsx";

const getTheme = () => {
    const theme = `${window?.localStorage?.getItem('theme')}`
    if (Object.values(themes).includes(theme)) return theme
    return themes.light
}

function App() {
    const [theme, setTheme] = useState(getTheme)

    useEffect(() => {
        document.documentElement.dataset.theme = theme
        localStorage.setItem('theme', theme)
    }, [ theme ])

    return (
        <Context.Provider value={[theme, setTheme]}>
            <Theme/>
        </Context.Provider>
    )
}

export default App
