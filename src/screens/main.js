import React from "react";

const App = (props) => {
  const container = {
width: "150px",
    height: "120px",
    height: "auto",
    float: "left",
    marginLeft: "20px",
    marginTop: 20,
    padding: "3px",
    borderStyle: 'solid',
    borderColor: 'black',
    backgroundColor: '#e6ffff',
    borderRadius: 5
  }

const image1 = {
    maxWidth: 150,
    height: 200,
    borderRadius:5
}
const textStyle={
  fontSize: 16,
  fontWeight: 'bold',
  fontFamily: 'Cursive',
  color: 'brown'
}


return (
<div style={container}>
<img style={image1} src={props.image} alt="image" />

<p style={textStyle}>{props.name}</p>
<p style={textStyle}>Rating:- {props.rating}</p>

</div>
  );
}
export default App;