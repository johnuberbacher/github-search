import React, {useState, useContext, useEffect} from 'react';
import Search from './search'
import ResultCard from './resultCard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { BiStar, BiCodeBlock, BiGroup } from "react-icons/bi";

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accounts: [],
            DataisLoaded: false
        };
    }
    componentDidMount() {
        let headers = {"Content-Type": "application/json"};
        if ('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 ') {
        headers["Authorization"] = `Token ${'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 '}`;
        }
        fetch( "https://api.github.com/search/users?q=type:user", {headers,})
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    accounts: json.items,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const {DataisLoaded, accounts} = this.state;
        if(!DataisLoaded) return (
            <div className="w-100">
                <Search></Search>
                <div className="p-3 mt-3 text-center">
                    <span className="fw-bold">loading...</span>
                </div> 
            </div>
        );
        return (
            <div className="w-100">
                <Search></Search>
                <Row>
                    {
                        accounts.map((account) => (
                            <Col xl={6} className="my-3">
                                <Card className="p-3 p-xl-4">
                                    <div class="d-flex flex-row align-items-center mb-3">
                                        <div className="rounded me-3" style={{backgroundImage: 'url(' + account.avatar_url + ')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', minWidth: '70px', maxHeight: '70px', minHeight: '70px'}}></div>
                                        <div>
                                            <h5>{account.name}<span className="text-secondary fw-light"> - {account.login}</span></h5>
                                            <div className="mb-2 text-secondary">Denver, CO</div>
                                        </div>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus. </p>
                                    <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center">
                                        <div className="me-4 text-secondary"><BiCodeBlock className="me-2 mb-1 bg-primary rounded text-white p-1" size="25px"></BiCodeBlock>000 Repos</div>
                                        <div className="me-4 text-secondary"><BiStar className="me-2 mb-1 bg-primary rounded text-white p-1" size="25px"></BiStar>000 Stars</div>
                                        <div className="text-secondary"><BiGroup className="me-2 mb-1 bg-primary rounded text-white p-1" size="25px"></BiGroup>000 Followers</div>
                                    </div>
                                    <a href="#" class="btn btn-primary btn-block mt-4">View Profile</a>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        )       
    }
}

export default Body;