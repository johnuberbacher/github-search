import React, { useState, useContext, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { BiStar, BiGitRepoForked, BiGroup } from "react-icons/bi";

class ResultCard extends React.Component {
    render() {
        return (
            <Col lg={6} className="my-3">
                <Card className="p-3 p-xl-4 h-100 d-flex align-items-stretch justify-content-between flex-column">
                    <div className="w-100">
                        <div className="d-flex flex-row align-items-center mb-3">
                            <div className="rounded me-3" style={{ backgroundImage: 'url(' + this.props.repo.owner.avatar_url + ')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', minWidth: '85px', maxHeight: '85px', minHeight: '85px' }}></div>
                            <div className="d-block">
                                <h5>{this.props.repo.name}<br /><span className="text-secondary fw-light">@{this.props.repo.owner.login}</span></h5>
                                <div className="mt-2 bg-primary rounded px-2 py-1 d-inline-block text-white small">{this.props.repo.language ? this.props.repo.language : "unknown"}</div>
                            </div>
                        </div>
                        <p>{this.props.repo.description}</p>
                    </div>
                    <div className="w-100">
                        <div className="d-flex flex-column flex-sm-row align-items-start align-items-md-center">
                            <div className="me-4 text-secondary"><BiGitRepoForked className="me-2 mb-1 bg-primary rounded text-white p-1" size="25px"></BiGitRepoForked>{this.props.repo.forks_count} Forks</div>
                            <div className="me-4 text-secondary"><BiStar className="me-2 mb-1 bg-primary rounded text-white p-1" size="25px"></BiStar>{this.props.repo.stargazers_count} Stars</div>
                            <div className="text-secondary"><BiGroup className="me-2 mb-1 bg-primary rounded text-white p-1" size="25px"></BiGroup>{this.props.repo.watchers_count} Watchers</div>
                        </div>
                        <div className="row">
                            <Col sm={6}>
                                <a href={this.props.repo.html_url} target="_blank" className="btn btn-outline-primary mt-3 w-100">GitHub</a>
                            </Col>
                            <Col sm={6}>
                                <a href={this.props.repo.git_url} target="_blank" className="btn btn-outline-primary mt-3 w-100">Clone</a>
                            </Col>
                        </div>
                    </div>
                </Card>
            </Col>
        )
    }
}

export default ResultCard;