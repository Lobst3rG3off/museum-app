import React, { Component } from 'react';

// If there is nothing to display: 
// <div className="noResults">
// 	<p>Please enter a search term.</p>
// </div>

// If there are results to display:
//<div className="showResults">
//	<p>Showing results for:</p>
//	<div className="artworks">
//	... results go here
//	</div>
//</div>

// Each piece of art should have structure:
// <div className="art">
// 	<img src="" alt=""/>
// 	<h2>Title</h2>
// 	<h3>Artist</h3>
// </div>

class DisplayArea extends Component {

	render() {
		return (
			<div className="displayArea" >
				<p>Display Area</p>
			</div>
		);
	}
}

export default DisplayArea;