import React from 'react';
import {Link} from 'react-router';
import Card from './Cards';

import colorir from '../../images/colorir.png';
import paper from '../../images/paper.png';
import letras from '../../images/letras.png';
import jogos from '../../images/jogos.png';


class CardsGrid extends React.Component {
    render() {
        return (
        	<div className="row">

				<Link to="/downloads/colorir">
		            <Card
		                titulo="Para Colorir"
		                texto="Lorem ipsum dolor sit amet."
		                src={colorir}
		              >
		            </Card>
	            </Link>

				<Link to="/downloads/papertoy">
		            <Card
		                titulo="Paper Toys"
		                texto="Lorem ipsum dolor sit amet."
		                src={paper}
		            >
		            </Card>
	            </Link>

	            <a href="/downloads/letras">
		            <Card
		                titulo="Letras"
		                texto="Lorem ipsum dolor sit amet."
		                src={letras}
		              >
		            </Card>
	            </a>

				<a href="/downloads/jogos">
		            <Card
		                titulo="Jogos"
		                texto="Lorem ipsum dolor sit amet."
		                src={jogos}
		            >
		            </Card>
	            </a>



        </div>
		);
    }
}

export default CardsGrid;
