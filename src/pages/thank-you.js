import React, {Component} from "react";
import {navigate} from 'gatsby'
import Helmet from "react-helmet";

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
    injectGA = () => {
        if (typeof window == 'undefined') {
            return;
        }
        window.dataLayer = window.dataLayer || [];
        function gtag(){
            window.dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'AW-404473807');
        gtag('event', 'conversion', {'send_to': 'AW-404473807/DMIjCNLx1fwBEM-P78AB'});
    };
    render() {
        return (
            <div style={divStyle}>
                <Helmet>
                    <title>Open Coast | Thank you</title>

                    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-404473807"/>
                    <script>{this.injectGA()}</script>

                </Helmet>
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
