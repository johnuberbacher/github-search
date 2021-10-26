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
        <div className="d-flex justify-content-end">
            <Form>
                <label 
                className="d-flex flex-row align-items-center justify-content-end py-3" 
                for="custom-switch">
                    {renderThemeToggleIcon()}
                    <Form.Check 
                    style={{transform: 'scale(1.25)'}}
                        checked={mode === "light" ? false : true}
                        className="fw-bold ms-3"
                        type="switch"
                        id="custom-switch"
                        onChange={setTheme}
                    />
                </label>
            </Form>
        </div>
    )
}

export default ThemeToggle;