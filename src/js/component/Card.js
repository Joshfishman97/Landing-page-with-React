import React from "react";
export function Card() {
	return (
		<div
			className="card text-center "
			style={{ width: "23%", height: "500px" }}>
			<img
				className="card-img-top"
				src="https://via.placeholder.com/500x325/O https://placeholder.com/alt="
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text d-flex justify-content-center">
					Some quick example text to build on the card title and make
					up the bulk of the cards content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
}
