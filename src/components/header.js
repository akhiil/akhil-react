import React from 'react';
import logo from "./img/logo.png";

const BeforeHeader = () => {
	const styles= {
		height: 100,
		 width: 100,
		 marginTop: 25,
		 marginLeft: 30
	}
	const header = {
		backgroundColor: 'gray',
		height: 150,
	}
  return (
   <div style={header}>
  	<img src={logo} alt="Logo" style={styles} />
  	</div>);
};

export default BeforeHeader;