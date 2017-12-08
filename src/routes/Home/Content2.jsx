import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import perform1 from '../../assets/perform1.png';
import perform2 from '../../assets/perform2.png';

class Content extends React.Component {
  static defaultProps = {
    className: 'content0',
  };

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const animType = {
      queue: isMode ? 'bottom' : 'right',
      one: isMode ? { y: '+=30', opacity: 0, type: 'from' }
        : { x: '-=30', opacity: 0, type: 'from' },
    }
    return (
      <div
        {...props}
        className={`content-template-wrapper content-half-wrapper ${props.className}-wrapper`}
      >
        {isMode ? undefined : (<div style={{height: '180px'}}></div>)}
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            key="img"
            animation={animType.one}
            className={`${props.className}-img`}
            id={`${props.id}-imgWrapper`}
            resetStyleBool
          >
            <span id={`${props.id}-img`}>
              <img src={perform1}/>
              <img src={perform2}/>
            </span>
          </TweenOne>
          <QueueAnim
            className={`${props.className}-text`}
            type={animType.queue}
            key="text"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
            id={`${props.id}-textWrapper`}
          >
            <h1 key="h1" id={`${props.id}-title`}>
              iSkating 表演团
            </h1>
            <p key="p" id={`${props.id}-content`}>
              由世界冠军佟健领衔，成员包括多位全国冠军等前国家队选手及教练，并且吸纳优秀学员及花样滑冰爱好者加入表演团，致力于打造融合中国文化的冰上音乐剧。
            </p>
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}


export default Content;
