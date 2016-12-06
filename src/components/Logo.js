import React from 'react';
import { IndexLink } from 'react-router';

import logoAmigossauro from '../images/logo_amigossauro.png';


class Logo extends React.Component {
  render() {
    return (
      <div className="Logo">
       	<IndexLink to="/"><img src={logoAmigossauro} alt="" /></IndexLink>       	
      </div>
    );
  }
}

export default (Logo);
