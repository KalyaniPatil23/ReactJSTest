import React from "react";
import logo from '../../logo.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars, faTrophy } from "@fortawesome/free-solid-svg-icons";
import './header.css';

const Header = (props) => {
    return(
        <div className="main">
            <img src={logo} className="logo"/>
            <div style={{margin: 'auto'}}>
                <ul className="list">
                    { props.data.map((element) => (
                        <li style={{margin: '1%'}}>{element}</li>
                    ))}
                </ul>
            </div>
            <FontAwesomeIcon icon={faBars} size="1x"/>
            <div className="points">
                <FontAwesomeIcon icon={faTrophy} style={{margin: 'auto'}} size="1x"/>
                <p style={{color: 'red', margin:'auto'}}>274</p>
            </div>
            <div style={{ border: '1px solid', borderRadius: '100%', margin: '1%', marginTop: '2%',padding: 'auto', height: '30px', textAlign: 'center', width: '30px'}}>
            <p style={{marginTop: '5%'}}>A</p>
            </div>
        </div>
    )
}

export default Header;