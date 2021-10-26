import React, {useContext} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';

class Search extends React.Component {
    render() {
        return (
            <Card>
                <Form>
                    <div className="w-100 position-relative">
                    <Form.Control type="text" style={{paddingRight: '6.5rem'}} placeholder="Search Github accounts" className="p-4"/>
                    <Button variant="primary" type="submit" className="me-3 position-absolute top-50 end-0 translate-middle-y">
                        Search
                    </Button>
                    </div>
                </Form>
            </Card>
        )
    }
}

export default Search;