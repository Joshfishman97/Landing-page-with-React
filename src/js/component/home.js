import React from "react";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./Card";
import { array } from "prop-types";
import { Footer } from "./Footer";
export function Home() {
	const newArray = [0, 1, 2, 3];
	const cardx4 = newArray.map((item, index) => {
		return <Card key={index} />;
	});
	return (
		<div>
			<Navbar />
			<Jumbotron />

			<div className="third-part">{cardx4}</div>
			<Footer />
		</div>
	);
}
