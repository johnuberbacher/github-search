import React, { useState, useContext, useEffect } from 'react';
import Search from './search'
import ResultCard from './resultCard'
import ThemeToggle from "./themeToggle";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { BiStar, BiCodeBlock, BiGroup } from "react-icons/bi";

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: [],
            DataisLoaded: false
        };
    }
    handleErrors(res) {
        if (!res.ok) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject({
                        status: res.status,
                        statusText: res.statusText,
                    });
                }, 0);
            });
        }
        return res.json();
    }
    searchUser = (value) => {
        console.log("" + value + "")
        value != '' ? 
        fetch("https://api.github.com/users/" + value + "/repos",)
            .then(this.handleErrors)
            .then((json) => {
                this.setState({
                    repos: json,
                    DataisLoaded: true
                });
            })
            .catch((error) => alert(error.statusText)) : alert('error')
       
    }
    render() {
        const { DataisLoaded, repos } = this.state;
        if (!DataisLoaded) return (
            <div className="w-100">
                <Search onSubmit={this.searchUser}></Search>
            </div>
        );
        return (
            <div className="w-100">
                <Search></Search>
                <ThemeToggle></ThemeToggle>
                <Row className="align-items-stretch">
                    {
                        repos.map((repo) => (
                            <ResultCard repo={repo}></ResultCard>
                        ))
                    }
                </Row>
            </div>
        )
    }
}

export default Body;