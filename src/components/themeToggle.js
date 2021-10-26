import React, {useContext} from 'react';
import { ThemeContext } from '../ThemeProvider';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import { BiMoon, BiSun } from "react-icons/bi";

const getStyles = (mode) => ({
    icon: {

    },
    toggle: {

    }
});

const ThemeToggle = () => {
    const { setTheme, mode } = useContext(ThemeContext);
    const styles = getStyles(mode);
    const renderThemeToggleIcon = () => {
        if (mode === "light") 
            return <BiSun className="text-primary" size="25px"></BiSun>;
        else
            return <BiMoon className="text-primary" size="25px"></BiMoon>
    }
    return (
        <Form className="d-flex flex-row align-items-center justify-content-end mb-3">
            <label for="custom-switch">
                {renderThemeToggleIcon()}
            </label>
            <Form.Check 
            style={{transform: 'scale(1.25)'}}
                checked={mode === "light" ? false : true}
                className="fw-bold ms-3"
                type="switch"
                id="custom-switch"
                onChange={setTheme}
            />
        </Form>
    )
}

export default ThemeToggle;