import React, { useContext } from 'react';
import {Form, Button, Card, Container } from 'react-bootstrap'


class Search extends React.Component {
    state = {
        input: ''
    };
    onInput = (e) => this.setState({
        input: e.target.value
    });
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.input);
    }
    render() {
        return (
            <div className="position-fixed top-0 start-0 end-0 pt-3" style={{ zIndex: '2' }}>
                <Container>
                    <Card className="mb-3">
                        <Form onSubmit={this.onSubmit}>
                            <div className="w-100 position-relative">
                                <Form.Control
                                    value={this.state.value}
                                    onChange={this.onInput}
                                    type="text"
                                    style={{ paddingRight: '6.5rem' }}
                                    placeholder="Search Github accounts"
                                    className="p-4" />
                                <Button variant="primary" type="submit" className="me-3 position-absolute top-50 end-0 translate-middle-y">
                                    Search
                                </Button>
                            </div>
                        </Form>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default Search;