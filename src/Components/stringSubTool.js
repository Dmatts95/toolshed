import React, { Component } from 'react';
import './stringSubTool.css';
import './utils.css';
import {Container, Row, Col, Label,Button, Collapse, Card, CardBody, CardHeader, Form, Input, FormGroup} from 'reactstrap'

function Output(props){
    if(props.list.length > 0){
        return (
            <div>
                <h3>Output</h3>
                {props.list.map( str => {
                    return(
                         <p className={props.inline?"inline": ""}>{str}</p>
                    ); 
                })}
            </div>
        );
    }
    return null; 
}

class StringSubTool extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = { 
            collapse: false, 
        //     self.input_file = input_file
        // self.output_file = output_file
        // self.symbol_to_replace = symbol_to_replace
        // self.url_string = url_string
        // self.trim_end = trim_end
        // self.all_one_line = all_one_line
        // self.to_lower = to_lower
            toLower: false,
            allOneLine: false,
            symbolToTrim: "###",
            templateString: "",
            charToTrim: -1,
            subList: "",
            masterList: []
        };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    handleSubmit(e){
        e.preventDefault(); 

        //parse list
        let stringList = this.state.subList.split('\n').map( substr => {
            let str = this.state.templateString.replace(new RegExp(this.state.symbolToTrim, 'g'), substr);
            if(this.state.toLower === true)
                str = str.toLowerCase(); 
            return str;
        });

        let laststr = stringList[stringList.length -1];
        laststr = laststr.slice(0, this.state.charToTrim);
        stringList[stringList.length -1] = laststr;

        this.setState({masterList: stringList});
    }

    handleChange(e){
        let change={};
        let val = e.target.value; 
        if(e.target.value === "on")
            val = e.target.checked; 
        

        console.log(e.target.value);
        change[e.target.name] = val;
        this.setState(change);
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
                <Input type="textarea" id="listInput" name="subList" onChange={this.handleChange}></Input>

                <Label for="replaceSting">String to Substitute</Label>
                <Input type="text" id="replaceSting" name="templateString" onChange={this.handleChange}></Input>

                <Label for="subSymbol">Symbol to Substitute</Label>
                <Input type="text" id="subSymbol" defaultValue="###" name="symbolToTrim" onChange={this.handleChange}></Input>

                <Label for="trimString">Characters to Trim</Label>
                <Input type="select" id="trimString" name="charToTrim" onChange={this.handleChange}>
                    <option>-1</option>
                    <option>-2</option>
                    <option>-3</option>
                    <option>-4</option>
                </Input>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" name="toLower" onChange={this.handleChange}/> To Lower
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" name="allOneLine" onChange={this.handleChange}/> Output on 1 line
                    </Label>
                </FormGroup>
                <Button className="form-button" color="primary" onClick={this.handleSubmit}>Submit</Button>
            </Form>
            <Output list={this.state.masterList} inline={this.state.allOneLine}/>
        </Container>
        );
    }
}

export default StringSubTool;
