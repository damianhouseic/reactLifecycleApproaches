import React from 'react';
import './App.css';
import ContactData from './component/lifecycle/ContactData';
import MessageData from './component/lifecycle/MessageData';
import ContactDataHOC from './component/higherOrder/ContactDataHOC';
import MessageDataHOC from './component/higherOrder/MessageDataHOC';
import ContactDataWithHooks from './component/future/ContactDataWithHooks';
import MessageDataWithHooks from './component/future/MessageDataWithHooks';
import { Card, Row, Col } from 'react-materialize';

function App() {
    return (
        <div className="App">
            <div>
                <Row>
                    <Col l={4} m={6} s={12}>
                        <Card className="blue-grey lighten-5" textClassName="black-text" title="Legacy Class Lifecycle">
                            <Row>
                                <Col l={6} className="center-align">
                                    <ContactData />
                                </Col>
                                <Col l={6} className="center-align">
                                    <MessageData />
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col l={4} m={6} s={12}>
                        <Card className="blue-grey lighten-5" textClassName="black-text" title="Higher Order Component">
                            <Row>
                                <Col l={6} className="center-align">
                                    <ContactDataHOC />
                                </Col>
                                <Col l={6} className="center-align">
                                    <MessageDataHOC />
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col l={4} m={6} s={12}>
                        <Card className="blue-grey lighten-5" textClassName="black-text" title="Hooks">
                            <Row>
                                <Col l={6} className="center-align">
                                    <ContactDataWithHooks />
                                </Col>
                                <Col l={6} className="center-align">
                                    <MessageDataWithHooks />
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default App;
