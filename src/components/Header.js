 /* eslint-disable */
import React from 'react';
import { IndexLink, Link } from 'react-router';
import { connect } from 'react-redux'
import { logout } from '../actions/auth';
import Divisor from './Commons/Divisor';

class Header extends React.Component {
    state = {
      isToggleOn: false,
      isCollapsed: false
    }

    componentDidMount() {
       let sticky = document.querySelector('.sticky');

        if (sticky.style.position !== 'sticky') {
          let stickyTop = sticky.offsetTop;

          document.addEventListener('scroll', function () {
            window.scrollY >= stickyTop ?
              sticky.classList.add('navbar-fixed-top') :
              sticky.classList.remove('navbar-fixed-top');
          });
        }
    }

  //  componentDidMount = () => {
  //    global.addEventListener('scroll', this.handleScroll);
  //  }
   //
  //  componentWillUnmount = () => {
  //    global.removeEventListener('scroll', this.handleScroll);
  //  }

  //  handleScroll = () => {
  //    const {isToggleOn} = this.state;
   //
  //   //  let stickyOff = document.querySelector('.sticky').offsetTop;
   //
  //    if (window.scrollY > 750 && !isToggleOn) {
  //     //  console.log('<');
  //     //  console.log(isToggleOn);
  //      this.setState({
  //        isToggleOn: true,
  //      });
  //    }
  //    else if (window.scrollY < 750 && isToggleOn) {
  //     //  console.log('>');
  //     //  console.log(false);
  //      this.setState({
  //        isToggleOn: false,
  //      });
  //    }
   //
  //  }

  handleMenu() {
    this.setState(prevState => ({
      isCollapsed: !prevState.isCollapsed
    }));
  }

  handleClick() {
    this.setState({
      isCollapsed: false,
    });
  }

  handleLogout(event) {
    event.preventDefault();
    this.props.dispatch(logout());
  }

  render() {
    const stick = this.state.isToggleOn ? 'navbar-fixed-top' : '';
    const nav = this.state.isCollapsed ? 'in' : '';
     // eslint-disable-next-line
    const active = { color:'#ffd403' };
     // eslint-disable-next-line
    const rightNav = this.props.token ? (
        <li className="dropdown">
          <a href="#" data-toggle="dropdown" className="navbar-avatar dropdown-toggle">
            <img src={this.props.user.picture || this.props.user.gravatar} role="presentation"/>
             {' '}{this.props.user.name || this.props.user.email || this.props.user.id}{' '}
            <i className="caret"></i>
          </a>
          <ul className="dropdown-menu">
            <li><Link to="/account">Minha conta</Link></li>
            <li className="divider"></li>
            <li><a href="#" onClick={this.handleLogout.bind(this)}>Sair</a></li>
          </ul>
        </li>

    ) : (
     <li className="dropdown">
        <a href="#" data-toggle="dropdown" className="navbar-avatar dropdown-toggle">
           logar
            <i className="caret"></i>
        </a>
        <ul className="dropdown-menu">
          <li><Link to="/login" activeStyle={active}>Acessar</Link></li>
          <li className="divider"></li>
          <li><Link to="/signup" activeStyle={active}>Registrar</Link></li>
        </ul>
     </li>
    );
    return (
      <nav className={`navbar navbar-default sticky ` + stick} >
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" onClick={this.handleMenu.bind(this)}>
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>

            <div id="navbar" className={`navbar-collapse collapse ` + nav}>
              <ul className="nav navbar-nav">
                <li><IndexLink to="/" onClick={this.handleClick.bind(this)} activeStyle={active}>Home</IndexLink></li>
                <Divisor />
                <li><Link to="/amizade" onClick={this.handleClick.bind(this)} activeStyle={active}>Era da Amizade</Link></li>
                <Divisor />
                <li><Link to="/downloads" onClick={this.handleClick.bind(this)} activeStyle={active}>Downloads</Link></li>
                <Divisor />
                <li><Link to="/blog" onClick={this.handleClick.bind(this)} activeStyle={active}>Blog</Link></li>
                <Divisor />
                <li><Link to="/contato" onClick={this.handleClick.bind(this)} activeStyle={active}>Contato</Link></li>
              </ul>
              {/* {rightNav} */}
            </div>

        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    user: state.auth.user
  };
};

export default connect(mapStateToProps)(Header);
