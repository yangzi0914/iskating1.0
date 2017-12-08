import React from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import { Menu } from 'antd';
import { Link } from 'dva/router';
import logo from '../../assets/logo.png';

const Item = Menu.Item;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: false,
    };
  }

  phoneClick = () => {
    this.setState({
      phoneOpen: !this.state.phoneOpen,
    });
  }

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    const selectedKeys = props.selectedKeys;
    delete props.isMode;
    delete props.selectedKeys;
    const navData = { menu1: ['首页', '/'], menu2: ['资讯', '/information'], menu3: ['公司介绍', '/company']};
    const navChildren = Object.keys(navData)
      .map((key, i) => (<Item key={i}><Link to={navData[key][1]}>{navData[key][0]}</Link></Item>));
    return (<TweenOne
      component="header"
      animation={{ opacity: 0, type: 'from' }}
      {...props}
      className={`${props.className} ${selectedKeys == '0' ? '' : 'white rel'}`}
    >
      <TweenOne
        className={`${this.props.className}-logo`}
        animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
        id={`${this.props.id}-logo`}
      >
        <img width="100%" src={logo}/>
      </TweenOne>
      {isMode ? (<div
        className={`${this.props.className}-phone-nav${this.state.phoneOpen ? ' open' : ''}`}
        id={`${this.props.id}-menu`}
      >
        <div
          className={`${this.props.className}-phone-nav-bar`}
          onClick={() => {
            this.phoneClick();
          }}
        >
          <em />
          <em />
          <em />
        </div>
        <div
          className={`${this.props.className}-phone-nav-text`}
        >
          <span className='myIcon'></span>
          <Menu
            defaultSelectedKeys={[selectedKeys]}
            mode="inline"
            theme="dark"
          >
            {navChildren}
          </Menu>
        </div>
      </div>) : (<TweenOne
        className={`${this.props.className}-nav`}
        animation={{ x: 30, type: 'from', ease: 'easeOutQuad' }}
      >
        <Menu
          mode="horizontal" defaultSelectedKeys={[selectedKeys]}
          id={`${this.props.id}-menu`}
        >
          {navChildren}
        </Menu>
      </TweenOne>)}
    </TweenOne>);
  }
}

Header.propTypes = {
  className: PropTypes.string,
  dataSource: PropTypes.object,
  id: PropTypes.string,
};

Header.defaultProps = {
  className: 'header0',
};

export default Header;
