import React from "react";
import ReactDOM from "react-dom";

const animals = [<li>Horse</li>, <li>Turtle</li>, <li>Elephant</li>, <li>Monkey</li>];

/**
 * change the content inside the map function
 **/
const animalsInHTML = animals.map((singleAnimal, i) => {
	return <li>{animals}</li>;
});

ReactDOM.render(<ul>{animalsInHTML}</ul>, document.querySelector("#myDiv"));
