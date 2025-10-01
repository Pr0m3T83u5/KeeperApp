import React from 'react'
import Header from './header_footer/Header';
import Footer from "./header_footer/Footer";
import Note from "./Note"
import startingNotes from "../startingNotes.jsx";

function CreateNote(notes){
  return <Note 
  key={notes.key}
  title={notes.title}
  content={notes.content}
  />
}


function App() {
//Styles
  var Appstyles = {
    display: "flex",
    flexDirection: "column",
    height: "100%"
    };
  var noteLayoutStyles = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "20px",
    alignItems: "flex-start",
    height: "fit-content"
  };

//Return
  return (
    <div style={Appstyles}>
      <Header /> 

      <main style={{flex: "1"}}>
          <div style={noteLayoutStyles}>
            {startingNotes.map(CreateNote)}
          </div>
      </main>

      <Footer />
    </div>
  )
}

//Export to Main
export default App;
