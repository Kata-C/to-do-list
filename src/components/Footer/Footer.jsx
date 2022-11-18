import React, { useState } from "react";

const Footer = (props) => {


    return (
        <div className="footer">
            <div className="input-bar footer-padding">
                <button> + </button>
                <button> o </button>
            </div>
            <div className="items-left footer-padding">
                <div> items </div>
            </div>
            <div className="items-category footer-padding">
                <button> All </button>
                <button> Active </button>
                <button> Completed </button>
            </div> 
        </div>
    );
};

export default Footer;