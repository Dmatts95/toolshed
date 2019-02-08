import React, { Component } from 'react';
import './stringSubTool.css';
import './utils.css';
import {Container, Col, Row, Label,Button, Collapse, Card, CardBody, CardHeader, Form, Input, FormGroup} from 'reactstrap'

function Output(props){
    if(props.list.length > 0){
        return (
            <Container className={"output"}>
                <h3>Output</h3>
                {props.list.map( str => {
                    return(
                         <p className={props.inline?"inline": ""}>{str}</p>
                    ); 
                })}
            </Container>
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
        this.setActivePreset = this.setActivePreset.bind(this);

        this.state = { 
            collapse: false,
            toLower: false,
            allOneLine: false,
            symbolToTrim: "###",
            templateString: "",
            charToTrim: 0,
            subList: "",
            masterList: [],
            animClass: "output",
            
            activePreset: "", 


            comma: {
                collapse: false,
                toLower: false,
                allOneLine: true,
                symbolToTrim: "###",
                templateString: "###,",
                charToTrim: -1,
                subList: "",
                masterList: [],
                animClass: "output"
            }
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

        if(parseInt(this.state.charToTrim) !== 0){
            console.log(this.state.charToTrim);
            let laststr = stringList[stringList.length -1];
            laststr = laststr.slice(0, this.state.charToTrim);
            stringList[stringList.length -1] = laststr;
        }

        this.setState({masterList: stringList});
    }

    setActivePreset(preset){    
        let tempState = this.state; 
        tempState.activePreset = preset;
        tempState.templateString = this.state.comma.templateString;
        tempState.allOneLine = this.state.comma.allOneLine;
        tempState.charToTrim = this.state.comma.charToTrim;
        this.setState(tempState);
        
        console.log(this.state);
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
            
            <Row>
                <Col sm="6">
                    <Form>
                        <Label for="listInput">List Input</Label>
                        <Input type="textarea" id="listInput" name="subList" onChange={this.handleChange}></Input>
        
                        <Label for="replaceSting">String to Substitute</Label>
                        <Input type="text" id="replaceSting" name="templateString" onChange={this.handleChange}></Input>
        
                        <Label for="subSymbol">Symbol to Substitute</Label>
                        <Input type="text" id="subSymbol" defaultValue={this.state.symbolToTrim} name="symbolToTrim" onChange={this.handleChange}></Input>
        
                        <Label for="trimString">Characters to Trim</Label>
                        <Input type="select" id="trimString" name="charToTrim" onChange={this.handleChange}>
                            <option>0</option>
                            <option>-1</option>
                            <option>-2</option>
                            <option>-3</option>
                            <option>-4</option>
                        </Input>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="toLower" onChange={this.handleChange} checked={this.state.toLower}/> To Lower
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="allOneLine" onChange={this.handleChange}  checked={this.state.allOneLine}/> Output on 1 line
                            </Label>
                        </FormGroup>
                        <Button className="mt-2" color="primary" onClick={this.handleSubmit}>Submit</Button>
                        <Button className="mt-2 mx-2"  color="primary" onClick={() => this.setActivePreset("comma")}>Comma Seperated</Button>
                    </Form>
                </Col>
                <Col sm="6">
                    <Output list={this.state.masterList} inline={this.state.allOneLine}/>
                </Col>
            </Row>
        </Container>
        );
    }
}

export default StringSubTool;
