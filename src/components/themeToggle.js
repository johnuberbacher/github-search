import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import { BiMoon, BiSun } from "react-icons/bi";
import { useMediaQuery } from 'react-responsive'

const darkModeClass = "dark";

const ThemeToggle = () => {
    const systemPrefersDark = useMediaQuery(
        {
            query: "(prefers-color-scheme: dark)"
        },
        undefined,
        prefersDark => {
            setDarkMode(prefersDark);
        }
    );

    const [isDarkMode, setDarkMode] = useState(systemPrefersDark);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add(darkModeClass)
        } else {
            document.documentElement.classList.remove(darkModeClass)
        }
    }, [isDarkMode]);

    const renderThemeToggleIcon = () => {
        if (!isDarkMode)
            return <BiSun className="text-primary" size="25px"></BiSun>;
        else
            return <BiMoon className="text-primary" size="25px"></BiMoon>
    }

    return (
        <div className="d-flex justify-content-end mt-5">
            <Form className="mt-5">
                <label
                    className="d-flex flex-row align-items-center justify-content-end pt-3 pb-2"
                    htmlFor="custom-switch">
                    {renderThemeToggleIcon()}
                    <Form.Check
                        style={{ transform: 'scale(1.25)' }}
                        checked={isDarkMode}
                        onChange={event => setDarkMode(event.target.checked)}
                        aria-label="Toggle Theme"
                        className="fw-bold ms-3"
                        type="switch"
                        id="custom-switch"
                    />
                </label>
            </Form>
        </div>
    )
}

export default ThemeToggle;