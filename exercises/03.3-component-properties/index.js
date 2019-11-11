import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

const BootstrapCard = props => {
    // 1) replace the hard-coded image, description, link, etc. With their property variable.
    image: "https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/",
        cardTitle: "Bob Dylan",
            cardDescription: "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
                button: { url: "https://en.wikipedia.org/wiki/Bob_Dylan", label: "Go to wikipedia" }
};


return (
    <div className="card m-5">
        <img className="card-img-top" src={props.image} alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.cardDescription}</p>
            <a href={data.button.url} className="btn btn-primary">
                {data.button.label}
            </a>
        </div>
    </div>
);

BootstrapCard.propTypes = {
    title: PropType.string
    // 2) add here the new properties into the proptypes object


};


// 3) Use ReactDOM to add the component into then DOM element #myDiv
ReactDOM.render(<BootstrapCard />, document.querySelector("#myDiv"));