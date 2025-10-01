import React from 'react';

function Note(props){

    //Styles
    var fontStyle = {
        fontSize: "15px",
        fontFamily: "'Trebuchet MS', sans-serif",
    };

    //Return
    return (
        <div className="note">
            <h1 style={fontStyle}>{props.title}</h1>
            <p style={fontStyle}>{props.content}</p>
        </div>
    )
}

//Exporting to App
export default Note;