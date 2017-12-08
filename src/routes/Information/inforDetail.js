import React from 'react';
import styles from './css/information.css';

import Nav from './../common/Nav';
import Footer from './../common/Footer';
import infoList from './../common/inforData/inforData';
// import Download from './../common/Download';

export default class Information extends React.Component {
  render() {
    return (
      <div className={styles.normal}>
        <Nav id="nav_0_0" key="nav_0_0" selectedKeys="1" />
        <div>我是详情</div>
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html: infoList[this.props.match.params.id].news.content,
            }}
          />
        </div>
        <Footer id="footer_0_0" key="footer_0_0" />
      </div>
    );
  }
}
