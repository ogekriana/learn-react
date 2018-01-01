import './style.css';

import React from "react";
import { render } from "react-dom";

class App extends React.Component {
	render(){
		return (
				<div className="row">
					<div className="col-sm-12 text-center">
						<h1>Hello 2018!!</h1>
					</div>
				</div>
			);
	}
}

render(<App/>, window.document.getElementById("app"));