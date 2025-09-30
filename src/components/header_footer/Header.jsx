import React from 'react';

function Header(){
    //Styles============================
    var headerStyles = {
        display: "flex",
        alignItems: "center",

        margin: "0px",
        padding: "0px",
        background: "#FDBE02",
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',

        height: "70px",
    };
    
    var keeperHeaderStyles ={
        margin: "0",
        paddingLeft: "30px",
        color: "white",

        fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
        fontWeight: "50",
        
    };
    //==================================

    //Return
    return (
        <header style={headerStyles}>
            <h1 style={keeperHeaderStyles}>Keeper</h1>
        </header>
    );
}

//Exporting to App
export default Header;