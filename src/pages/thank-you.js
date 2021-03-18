import React, {Component} from "react";
import {navigate} from 'gatsby'

const divStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '70px',
    width: '60%',
    backgroundColor: '#EBE4DB'
}

const buttonStyle = {
    marginTop: '20px',
    background: 'transparent',
    border: 'none',
    color: '#862F5C',
}

export default class ThankYou extends Component {
    render() {
        return (
            <div style={divStyle}>
                <h2>Thank You!</h2>
                <h5 style={{
                    color: '#535353'
                }}>Your form submission has been received.</h5>
                <button style={buttonStyle} onClick={() => navigate('/lg1')}><i className="fa fa-arrow-left"/> Back to
                    our site
                </button>
            </div>
        )
    }
}