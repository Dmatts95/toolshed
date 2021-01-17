import React, {useState} from 'react';
import {Container,Row, Col, Form, Button, OverlayTrigger, Tooltip} from 'react-bootstrap';
import {FaCopy, FaCheck} from 'react-icons/fa';

const StringSubber = () => {
    const stringSubberInitialState = {
        collapse: false,
        toLower: false,
        allOneLine: false,
        symbolToTrim: "###",
        templateString: "",
        charToTrim: 0,
        unformattedList: "",
        masterList: [],
        haveCopied: false
    }
    const cslState = {
        charToTrim: -1,
        templateString: "###,",
        symbolToTrim: "###",
        allOneLine: true
    }

    const [appState, setAppState] = useState(stringSubberInitialState);

    const handleChange = (event) => {
        const {name, value, checked} = event.target;
        const delta = {};
        if(event.target.type === 'checkbox')
            delta[name] = checked;
        else
            delta[name] = value;
        setAppState({...appState, ...delta});
    }

    const handleClear = () => {
        setAppState(stringSubberInitialState);
    }

    const handleCSL = () => {
        setAppState({...appState, ...cslState});

    }

    const handleSubmit = (e) => {
        e.preventDefault(); 

        //parse list
        let stringList = appState.unformattedList.split('\n').map( substr => {
            let str = appState.templateString.replace(new RegExp(appState.symbolToTrim, 'g'), substr);
            if(appState.toLower === true)
                str = str.toLowerCase(); 
            return str;
        });

        if(parseInt(appState.charToTrim) !== 0){
            console.log(appState.charToTrim);
            let laststr = stringList[stringList.length -1];
            laststr = laststr.slice(0, appState.charToTrim);
            stringList[stringList.length -1] = laststr;
        }

        const delta = {
            haveCopied: false, 
            masterList: stringList
        }

        setAppState({...appState, ...delta});
    }

    const handleCopyToClipBoard = () => {
        const toWrite = (appState.allOneLine) ? appState.masterList.join('') : appState.masterList.join('\n');
        console.log(toWrite);
        navigator.clipboard.writeText(toWrite).then( r => {
            setAppState({...appState, haveCopied: true});
        }
        ).catch(error => {console.log(error);});
    }

    const ClipboardHover = (props) => (
        <Tooltip {...props} >
            {appState.haveCopied? 'Copied' : 'Copy To Clipboard'}
        </Tooltip>
    )
    return (
        <Container>
            <Row>
                <Col xs={12} md={6}>
                    <Row>
                        <Col>
                            <h1 className='text-secondary'>String Subber</h1>
                        </Col>
                    </Row>       
                    <Form>
                        <Form.Row>
                            <Col>
                                <Form.Group controlId='stringSubberForm.UnfListInput'>
                                    <Form.Label>Unformated List</Form.Label>
                                    <Form.Control as='textarea' type='text' name='unformattedList' value={appState.unformattedList} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                                <Form.Group controlId='stringSubberForm.ReplaceString'>
                                    <Form.Label>Replace String</Form.Label>
                                    <Form.Control type='text' name='templateString' placeholder='To Substitute' value={appState.templateString} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                                <Form.Group controlId='stringSubberForm.SymbolToSubstitute'>
                                    <Form.Label>Symbol To Substitute</Form.Label>
                                    <Form.Control type='text' name='symbolToTrim' value={appState.symbolToTrim} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col xs={2}>
                                <Form.Group controlId='stringSubberForm.CharsToTrim'>
                                    <Form.Label>String To Substitute</Form.Label>
                                    <Form.Control as='select' name='charToTrim' value={appState.charToTrim} onChange={handleChange} >
                                        <option>0</option>
                                        <option>-1</option>
                                        <option>-2</option>
                                        <option>-3</option>
                                        <option>-4</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                                <Form.Group controlId='stringSubberForm.ToLower'>
                                    <Form.Check type='checkbox' label="To Lowercase" name='toLower' checked={appState.toLower} onChange={handleChange} />    
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                                <Form.Group controlId='stringSubberForm.AllOneLine'>
                                    <Form.Check type='checkbox' label="Output on 1 Line" name='allOneLine' checked={appState.allOneLine} onChange={handleChange} />    
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Button variant='primary' type='submit' onClick={handleSubmit}>Submit</Button>
                        <Button variant='primary' className='ml-2' onClick={handleClear}>Clear</Button>
                        <Button variant='primary' className='float-right' onClick={handleCSL}>CSL</Button>

                    </Form>
                </Col>
                <Col xs={12} md={6}>
                    { appState.masterList.length > 0 && 
                        <>
                            <Row className="mt-4 justify-content-center">
                                <Col>
                                    <h2 className='text-secondary align-middle mb-0 d-inline-block'>
                                        Output
                                    </h2>
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={ClipboardHover}
                                    >
                                        <Button className='ml-2 align-middle d-inline-block' onClick={handleCopyToClipBoard}>
                                            {appState.haveCopied? <FaCheck /> : <FaCopy />}
                                        </Button>
                                    </OverlayTrigger>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    {appState.masterList.map((entry,i) => { 
                                        const spKey = `output${i}`;
                                        return(<p className={appState.allOneLine?'d-inline-block':''} key={spKey}>{entry}</p>)
                                    })}
                                </Col>
                            </Row>
                        </>
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default StringSubber;