import React from 'react';
import ReactDOM from 'react-dom';
import enquire from 'enquire.js';
import { scrollScreen } from 'rc-scroll-anim';

import Nav from './../common/Nav';
import Content0 from './Content0';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Content4 from './Content4';
import Content5 from './Content5';
import Footer from './../common/Footer';
import Download from './../common/Download';

import './less/antMotion_style.less';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMode: false,
      white: false
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    this.enquireScreen((isMode) => {
      this.setState({ isMode });
    });

    window.addEventListener('scroll', () => {
      var top = document.body.scrollTop || document.documentElement.scrollTop
      top > (document.body.clientHeight - 40) ? this.setState({ white: true }) : this.setState({ white: false });
    })
  }

  enquireScreen = (cb) => {
    /* eslint-disable no-unused-expressions */
    enquire.register('only screen and (min-width: 320px) and (max-width: 767px)', {
      match: () => {
        cb && cb(true);
      },
      unmatch: () => {
        cb && cb();
      },
    });
    /* eslint-enable no-unused-expressions */
  }

  render() {
    const children = [
      <Nav id="nav_0_0" key="nav_0_0" isMode={this.state.isMode} selectedKeys="0" className={`${this.state.white ? 'white ' : ''}header0`}/>,
      <Content0 id="content_0_0" key="content_0_0" isMode={this.state.isMode}/>,
      <Content1 id="content_9_0" key="content_9_0" isMode={this.state.isMode}/>,
      <Content2 id="content_2_0" key="content_2_0" isMode={this.state.isMode}/>,
      <Content3 id="content_3_0" key="content_3_0" isMode={this.state.isMode}/>,
      <Content4 id="content_4_0" key="content_4_0" isMode={this.state.isMode}/>,
      <Content5 id="content_5_0" key="content_5_0" isMode={this.state.isMode}/>,
      <Footer id="footer_0_0" key="footer_0_0" isMode={this.state.isMode}/>,
    ];
    return (
      <div className="templates-wrapper">
        {children}
        {this.state.isMode ? (<Download id="download_0_0" key="download_0_0"/>) : undefined}
      </div>
    );
  }
}
