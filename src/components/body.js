import React, {useState, useContext, useEffect} from 'react';
import { ThemeContext } from '../ThemeProvider';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { BiStar, BiCodeBlock, BiGroup } from "react-icons/bi";
import {theme} from "./theme";

const getStyles = (mode) => ({
    card: {
        borderColor: theme[mode].highlightColor,
        backgroundColor: theme[mode].foreGroundColor,
    },
    text: {
        color: theme[mode].text
    }
});

const Body = () => {

    const { setTheme, mode } = useContext(ThemeContext);
    const styles = getStyles(mode);
        return (
            <div>
                <div style={(styles.text)} className="p-3 mt-3 text-center">
                    <span className="fw-bold">0 results found for johnuberbacher</span>
                </div>
                <Row>
                    <Col xl={6} className="my-3">
                        <Card style={(styles.card)} className="p-3 p-xl-4">
                            <div class="d-flex flex-row align-items-center mb-3">
                                <div className="bg-dark rounded me-3" style={{minWidth: '70px', maxHeight: '70px', minHeight: '70px'}}></div>
                                <div>
                                    <h5 style={(styles.text)}>johnuberbacher<span className="text-secondary fw-light"> - @johnuberbacher</span></h5>
                                    <div className="mb-2 text-secondary">Denver, CO</div>
                                </div>
                            </div>
                            <p style={(styles.text)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus. </p>
                            <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center">
                                <div className="me-4 text-secondary"><BiCodeBlock className="me-2 mb-1 bg-primary rounded text-white p-1" size="25px"></BiCodeBlock>000 Repos</div>
                                <div className="me-4 text-secondary"><BiStar className="me-2 mb-1 bg-primary rounded text-white p-1" size="25px"></BiStar>000 Stars</div>
                                <div className="text-secondary"><BiGroup className="me-2 mb-1 bg-primary rounded text-white p-1" size="25px"></BiGroup>000 Followers</div>
                            </div>
                            <a href="#" class="btn btn-primary btn-block mt-4">View Profile</a>
                        </Card>
                    </Col>
                </Row>
            </div>
    )   
}

export default Body;