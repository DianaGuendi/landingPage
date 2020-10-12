import React from "react";
import PropTypes from "prop-types";

//include images into your bundle
import { Header } from "./Header.js";
import { Card } from "./Card.js";
import { Mebar } from "./Mebar.js";
import { Footer } from "./Footer.js";

//create your first component
export function Home() {
	return (
		<div className="Container">
			<Mebar />
			<Header />
			<div className="row">
				<div className="col-sm">
					<Card
						myPicture="https://home.bt.com/images/plane-travel-why-do-you-have-to-keep-blinds-up-on-take-off-and-landing-136406892955202601-160620150302.jpg"
						myTittle="Air Transport"
					/>
				</div>
				<div className="col-sm">
					<Card
						myPicture="http://logsolution.ge/en/wp-content/uploads/post-img-01-770x380.jpg"
						myTittle=" Sea Transport"
					/>
				</div>
				<div className="col-sm">
					<Card
						myPicture="https://www.shiplilly.com/wp-content/uploads/2013/05/Cargo-insurance.jpg"
						myTittle="Insurance Cargo"
					/>
				</div>
				<div className="col-sm">
					<Card
						myPicture="http://www.sumbermitrasamudera.com/wp-content/uploads/2016/04/about-us.jpg"
						myTittle="Customs Clearance"
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
}
