import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="card">
			<img
				className="card-img-top"
				src={props.myPicture}
				alt="Card image cap"
			/>

			<div className="card-body">
				<h5 className="card-title">{props.myTittle}</h5>
				<p className="card-text">
					{
						"Some quick example text to build on the card title and make up the bulk's of the card's content."
					}
				</p>
				<a href="#" className="btn btn-primary">
					Find out more!
				</a>
			</div>
		</div>
	);
}
Card.propTypes = {
	myTittle: PropTypes.string,
	myPicture: PropTypes.img
};
