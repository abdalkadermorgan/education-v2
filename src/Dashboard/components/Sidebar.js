import { Accordion } from "react-bootstrap"
import { Link } from "react-router-dom";
import { UilBookAlt } from '@iconscout/react-unicons';
import { UilNotebooks } from '@iconscout/react-unicons'
import { UilSliderHRange } from '@iconscout/react-unicons';

const Sidebar = () => {


    return (
        <div className="sidebar">
            <div className="sidebar">
                <div className="sidebar-p-y">
                    <div className="sidebar-heading">
                        APPLACTION
                    </div>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <div className="accordion-bg">
                                <Accordion.Header>
                                    <UilBookAlt color="hsla(0,0%,100%,.54)" width="20" height="20" />
                                    COURSES
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul className="sidebar-menu">
                                        <li className="sidebar-menu-item">
                                            <Link to="/dashboard/courses" className="sidebar-menu-button">
                                                Courses
                                            </Link>
                                        </li>
                                    </ul>
                                </Accordion.Body>

                            </div>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion>
                        <Accordion.Item eventKey="1">
                            <div className="accordion-bg">
                                <Accordion.Header>
                                    <UilSliderHRange color="hsla(0,0%,100%,.54)" width="20" height="20" />
                                    Slider
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul className="sidebar-menu">
                                        <li className="sidebar-menu-item">
                                            <a className="sidebar-menu-button">
                                                Slider
                                            </a>
                                        </li>
                                    </ul>
                                </Accordion.Body>

                            </div>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion>
                        <Accordion.Item eventKey="2">
                            <div className="accordion-bg">
                                <Accordion.Header>
                                    <UilNotebooks color="hsla(0,0%,100%,.54)" width="20" height="20" />
                                    Info Graphic
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul className="sidebar-menu">
                                        <li className="sidebar-menu-item">
                                            <a className="sidebar-menu-button">
                                                Info Graphic
                                            </a>
                                        </li>
                                    </ul>
                                </Accordion.Body>

                            </div>
                        </Accordion.Item>
                    </Accordion>

                </div>
            </div>
        </div>
    )
}

export default Sidebar;