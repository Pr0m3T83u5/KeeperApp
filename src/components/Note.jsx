import React from 'react';

function Note(){

    //Styles
    var fontStyle = {
        fontSize: "20px",
        fontFamily: "'Trebuchet MS', sans-serif",
    };

    //Return
    return (
        <div className="note">
            <h1 style={fontStyle}>This is the note title</h1>
            <p style={fontStyle}>this is the note content</p>
        </div>
    )
}

//Exporting to App
export default Note;