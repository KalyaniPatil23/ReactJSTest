import { grey } from "@mui/material/colors";
import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faF, faInbox, faIndent} from '@fortawesome/free-solid-svg-icons';
import {faIdBadge} from '@fortawesome/free-regular-svg-icons';
import features from '../../features.png';
import logo from '../../logo1.png';

const Footer = () => {
    
    return(
        <div>
            <div style={{background: 'rgb(22 22 50)', display: 'flex', color:'white', marginTop: '2%',gap: '2%'}}>
                <div>
                    <img src={logo} style={{height: '30%'}}/>
                    <p>Fastest Growing Medical Platform for Doctors.</p>
                    <span style={{margin: '5%'}}><FontAwesomeIcon icon={faF} size="1x"/></span>
                    <span style={{margin: '5%'}}><FontAwesomeIcon icon={faIdBadge} size="1x"/></span>
                    <span style={{margin: '5%'}}><FontAwesomeIcon icon={faIndent} size="1x"/></span>
                    <span style={{margin: '5%'}}><FontAwesomeIcon icon={faInbox} size="1x"/></span>
                </div>
                <div>
                    <h5>REACH US</h5>
                    <p>Please contact the below setails for any other information</p>
                    <p style={{color: 'aqua'}}>Email:</p>
                    <p>info@hidoc.co</p>
                    <p style={{color: 'aqua'}}>Address:</p>
                    <p>Hidoc Dr. Inc, 2055 Limestone Rd, STE 200-C, Wilmington, DE, 19808, United States.</p>
                </div>
                <div style={{width: '40%'}}>
                    <h5>HIDOC DR. FEATURES</h5>
                    <img src={features} style={{height: '70%', width: '90%'}}/>
                </div>
            </div>
            <div style={{textAlign: 'center', background: 'grey', padding: '1%'}}>
            <span style={{display: 'flex', justifyContent: 'center'}}><span dangerouslySetInnerHTML={{"__html": "&copy;"}}></span><p style={{margin: 0}}>Copyright 2022 Hidco Dr. Inc.</p></span>
               <p style={{margin: 0}}>Terms & Conditions | Privacy Policy</p>
            </div>
        </div>
    )
}

export default Footer;