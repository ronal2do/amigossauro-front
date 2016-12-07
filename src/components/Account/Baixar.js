import React from 'react';
import { connect } from 'react-redux'
import { facebookLogin } from '../../actions/oauth';
import FontAwesome from 'react-fontawesome';

class Baixar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFacebook = this.handleFacebook.bind(this)
  }

  handleFacebook() {
    this.props.dispatch(facebookLogin())
  }

  baixar(event){
    event.preventDefault();
    console.log('baixando...')
  }

  render() {
    const baixar = this.props.token ? (
      <p><br />
        <a className="btn btn-newsletter" href={`/upload-folder/`+ this.props.file + `.pdf`} name={this.props.file} download>
            <FontAwesome
              className='fa-fw'
              name='download'
            />
          Baixar
        </a>
      </p>
    ) : (
      <p><br />
        <button onClick={this.handleFacebook} className="btn btn-facebook">Baixar via Facebook</button>
      </p>
    );

    return (
      <div>
         {baixar}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    token: state.auth.token,
    user: state.auth.user
  };
};

export default connect(mapStateToProps)(Baixar);
