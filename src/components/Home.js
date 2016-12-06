import React, { Component } from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';
import Social from './Social';
import Frase from './Video/Frase';
import Videos from './Video/Videos';
import Box from './Box';
import Newsletter from './Newsletter/Newsletter';

import homeImge from '../images/home.png';

class Home extends Component {
  render() {
    const { messages } = this.props;
    return (
      <div className="container">
        <Messages messages={messages}/>
        <div className="pull-right">
          <Social />
        </div>
        <div className="row">
          <Box
            titulo="Ruaar!!!"
            src={homeImge}
          >
            <p className="Azul">De três ovos perdidos em uma floresta mágica, nasceram três dinossauros: o <strong>Dim</strong>, a <strong>Dana</strong> e o <strong>Deco</strong>.
            <br/>Juntos, eles descobriram o poder da amizade e hoje formam um grupo muito divertido: o <strong>Amigossauro</strong>.
            <br/>Chame todas as crianças para fazer parte dessa turma, onde a imaginação não tem limites.</p>
          </Box>
            <div className="Padding-top"></div>
            <Videos titulo="nossos vídeos"/>
        </div>
        <div className="row">
          <Frase />
          <Newsletter className="col-sm-12" style={{padding:'0px'}}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Home);
