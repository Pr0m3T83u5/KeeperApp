import React from 'react'
import Header from './header_footer/Header';
import Footer from "./header_footer/Footer";
import Note from "./Note"

function App() {
  
//Styles
  var Appstyles = {
      display: "flex",
      flexDirection: "column",
      height: "100%",
    };

//Return
  return (
    <div style={Appstyles}>
      <Header /> 

      <main style={{flex: "1"}}>
        <Note />
      </main>

      <Footer />
    </div>
  )
}

//Export to Main
export default App;
