import {useContext, useState} from 'react';

import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';

import {ThemaContext} from "../../context";

function SwitchToggle() {

    const [mode, setMode] = useState('dark');

    const {thema,setThema} = useContext(ThemaContext);

    return (

        <DarkModeToggle
            mode={mode}
            size="sm"
            inactiveTrackColor="#e2e8f0"
            inactiveTrackColorOnHover="#f8fafc"
            inactiveTrackColorOnActive="#cbd5e1"
            activeTrackColor="#334155"
            activeTrackColorOnHover="#1e293b"
            activeTrackColorOnActive="#0f172a"
            inactiveThumbColor="#1e293b"
            activeThumbColor="#e2e8f0"
            onChange={(mode) => {
                setMode(mode);
                setThema(mode)
            }}
        />
    );
}
export {SwitchToggle}