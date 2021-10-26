import React, {useContext} from 'react';
import { ThemeContext } from '../ThemeProvider';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import {theme} from "./theme";

const getStyles = (mode) => ({
    card: {
        backgroundColor: theme[mode].foreGroundColor,
        borderColor: theme[mode].highlightColor,
    },
    text: {
        color: theme[mode].text
    },
    form: {
        backgroundColor: theme[mode].foreGroundColor,
        paddingRight: '6.5rem'
    }
});

const Search = () => {
    const { setTheme, mode } = useContext(ThemeContext);
    const styles = getStyles(mode);
    return (
        <Card style={(styles.card)}>
            <Form>
                <div className="w-100 position-relative">
                <Form.Control type="text" style={(styles.form)} placeholder="Search Github accounts" className="p-4"/>
                <Button variant="primary" type="submit" className="me-3 position-absolute top-50 end-0 translate-middle-y">
                    Search
                </Button>
                </div>
            </Form>
        </Card>
    )
}

export default Search;