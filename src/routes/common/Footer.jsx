import React from 'react';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import weChat from '../../assets/weChat.png';
import app from '../../assets/app.png';
import sina from '../../assets/sina.png';
import weChat_QR from '../../assets/weChat_QR.png';
import app_QR from '../../assets/app_QR.png';
import weChat_QR_phone from '../../assets/weChat_QR_phone.png';
import app_QR_phone from '../../assets/app_QR_phone.png';
import logo_footer from '../../assets/logo_footer.png';

class Footer extends React.Component {

  static defaultProps = {
    className: 'footer0',
  };

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const animType = {
      queue: isMode ? 'bottom' : 'left',
      one: isMode ? { y: '+=30', opacity: 0, type: 'from' }
        : { x: '+=30', opacity: 0, type: 'from' },
    }
    return (<OverPack
      {...props}
      playScale={0.05}
    >
      <QueueAnim
        className={`${props.className}-text`}
        type={animType.queue}
        key="footer-img"
        ease={['easeOutCubic', 'easeInCubic']}
        id={`${props.id}-textWrapper`}
      >
        {isMode ? (<ul key="img" id={`${props.id}-img`} className="footer-h5">
          <li>
            <p>爱滑冰微信公众号</p>
            <img src={weChat_QR_phone}/>
          </li>
          <li>
            <p>爱滑冰app下载</p>
            <img src={app_QR_phone}/>
          </li>
        </ul>) : (
        <ul key="img" id={`${props.id}-img`} className="footer-pc">
          <li>
            <img src={weChat}/>
            <img src={weChat_QR} style={{left: '-47px'}}/>
          </li>
          <li>
            <img src={app}/>
            <img src={app_QR}/>
          </li>
          <li>
            <a href="http://weibo.com/p/1006065665302995/home?from=page_100606&mod=TAB#place" target="_blank"><img src={sina}/></a>
          </li>
        </ul>)}
        <p key="p" id={`${props.id}-content`}>
          北京翼翔冰雪时尚文化有限公司   京ICP备15047118号
        </p>
      </QueueAnim>
      <TweenOne
        key="footer-logo"
        animation={animType.one}
        className={`${props.className}-img`}
        id={`${props.id}-imgWrapper`}
        resetStyleBool
      >
        <span id={`${props.id}-img`}>
          <img src={logo_footer}/>
        </span>
      </TweenOne>
    </OverPack>);
  }
}

export default Footer;
