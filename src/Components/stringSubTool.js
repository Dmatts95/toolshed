import React, { Component } from 'react';
import './stringSubTool.css';
import './utils.css';
import {Container, Row, Col, Label,Button, Collapse, Card, CardBody, CardHeader, Form, Input, FormGroup} from 'reactstrap'

class StringSubTool extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
        <Container className="string-sub-tool text-left">
            <h2 className="tool-header">String Substitution Tool</h2>   
            <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Help</Button>
            <Collapse isOpen={this.state.collapse} className="mb-4">
                <Card className="help-section border">
                    <CardHeader tag="h2" className="color-primary">How To Use</CardHeader>
                    <CardBody>This is example text will replace later</CardBody>  
                </Card>
            </Collapse>
            <Form>
                <Label for="listInput">List Input</Label>
                <Input type="textarea" id="listInput"></Input>

                <Label for="replaceSting">String to Substitute</Label>
                <Input type="text" id="replaceSting"></Input>

                <Label for="subSymbol">Symbol to Substitute</Label>
                <Input type="text" id="subSymbol" defaultValue="###"></Input>

                <Label for="trimString">Characters to Trim</Label>
                <Input type="select" id="trimString">
                    <option>-1</option>
                    <option>-2</option>
                    <option>-3</option>
                    <option>-4</option>
                </Input>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" /> To Lower
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" /> Output on 1 line
                    </Label>
                </FormGroup>
                <Button className="form-button" color="primary">Submit</Button>
            </Form>
        </Container>
        );
    }
}

export default StringSubTool;
