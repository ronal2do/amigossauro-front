import React from 'react';
const padding = {
  padding: '40px'
}
class Card extends React.Component {
  render() {

    return (
      <div className="col-sm-6">

          <div className={ ' ' + this.props.titulo }>
            <div className="panel-body">
              <div style={padding}>
                <img src={this.props.src} className="img-responsive" alt={this.props.src}/>
              </div>

            </div>
          </div>
      </div>
    );
  }
}

export default (Card);
