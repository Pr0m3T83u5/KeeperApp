import React from 'react';

function Footer(){
    //Get current Date and Time
    var date = new Date();
    var currentYear = date.getFullYear();

    //Styles
    var footerStyles = {
        textAlign: "center",
        paddingBottom: "15px",
    };
    var copyrightStyles = {
        fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
        color: "#D3D3D3",
        size: "10px"
    };

    //Return
    return (
        <footer style={footerStyles}>
            <p style={copyrightStyles}> Copyright @{currentYear}</p>
        </footer>
    );
}

//Exporting to App
export default Footer;