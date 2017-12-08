import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import close from '../../assets/close.png';
import logo_download from '../../assets/logo_download.png';

class Download extends React.Component {

  static defaultProps = {
    className: 'download',
  };
  constructor(props) {
    super(props);
    this.state = {
      isPhone: true,
    };
  }

  closeDownload = () => {
    this.setState({
      isPhone: false,
    });
  }

  render() {
    const props = { ...this.props };
    // const isMode = props.isMode;
    delete props.isMode;

    return (<OverPack
      {...props}
      playScale={0.05}
    >
      {this.state.isPhone ? (<TweenOne
        key="download"
        animation={{ y: '+=30', opacity: 0, type: 'from' }}
        className={`${props.className}-img`}
        id={`${props.id}-imgWrapper`}
        resetStyleBool
      >
        <div id={`${props.id}-img`}>
          <img src={close} className='close' onClick={this.closeDownload}/>
          <img src={logo_download} className='logo_download'/>
          <a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.RongZhi.LoveSkating">下载</a>
        </div>
      </TweenOne>) : undefined}
    </OverPack>);
  }
}

export default Download;
