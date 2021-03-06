import React from 'react';
import Linha from './Commons/Linha';

class Box extends React.Component {
  render() {
    return (
      <div className="col-sm-12">
        <div className="Padding-top"></div>
          <div className="col-sm-8 Box">
            <h1> {this.props.titulo} </h1>
                  {this.props.children}
            <Linha />
          </div>

          <div className="col-sm-4">
             <img src={this.props.src} className="img-responsive" alt={this.props.src} />
          </div>
        <br/>
        <br/>
      </div>
    );
  }
}

export default (Box);
