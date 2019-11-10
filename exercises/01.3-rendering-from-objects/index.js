import React from "react";
import ReactDOM from "react-dom";

const customer = {
	first_name: "Bob",
	last_name: "Dylan"
};

//              your code inside these <div> tags
const output = (
	<div>
<<<<<<< HEAD
		<h1>
			My name is
			{customer.first_name}
		</h1>
		<h2>
			My last name is
			{customer.last_name}
		</h2>
	</div>
=======
		<h1>My name is {customer.first_name}</h1>
		<h2>My last name is {customer.last_name}</h2>
	</div>











>>>>>>> d40eab59ef0a5dccb61f8f87e6795b26c6a720fb
);

//              what     where
ReactDOM.render(output, document.querySelector("#myDiv"));
