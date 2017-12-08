import React from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import aboutUs1 from '../../assets/aboutUs1.png';
import aboutUs2 from '../../assets/aboutUs2.png';
import aboutUs3 from '../../assets/aboutUs3.png';
import aboutUs4 from '../../assets/aboutUs4.png';

class Content extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
  };

  static defaultProps = {
    className: 'content7',
  };

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    return (
      <div
        {...props}
        className={`content-template-wrapper ${props.className}-wrapper`}
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            component="h1"
            key="h1"
            reverseDelay={300}
            id={`${props.id}-title`}
          >
            关于我们
          </TweenOne>
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            component="p"
            key="p"
            reverseDelay={300}
            id={`${props.id}-content`}
          >
            翼翔冰雪® 由花样滑冰世界冠军佟健先生于 2015 年 7 月创办，现已形成了由体育 + 教育、体育 + 文化和新媒体构成的全面的中国冰雪运动服务平台。
            <br /><span />
          </TweenOne>
        </OverPack>
        <OverPack
          className={`content-template ${props.className}`}
          id={`${props.id}-content1`}
        >
          <div key='div1' style={{height: `${isMode ? '60px' : '160px'}`}}></div>
          <div key='div'>
            <TweenOne
              component="div"
              key="div-img"
              animation={{ x: '-=30', opacity: 0, type: 'from' }}
              className={`${props.className}-img`}
            >
              <img src={aboutUs1} />
              <img src={aboutUs2} />
              <img src={aboutUs3} />
            </TweenOne>
            <TweenOne
              animation={{ x: '+=30', opacity: 0, type: 'from' }}
              component="img"
              key="img"
              reverseDelay={300}
              src={aboutUs4}
            >
            </TweenOne>
          </div>
        </OverPack>
        <OverPack
          className={`content-template ${props.className}`}
          // location={props.id}
          id={`${props.id}-content`}
        >
          <div key='div1' style={{height: `${isMode ? '30px' : '80px'}`}}></div>
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            component="h2"
            key="h2"
            reverseDelay={300}
            id={`${props.id}-title`}
          >
            庞清佟健冰上中心
          </TweenOne>
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            component="p"
            key="text"
            reverseDelay={300}
            id={`${props.id}-content`}
          >
            冰上中心旨在提供高端优质的花样滑冰课程培训，打造由前国家队选手组成的冠军教练团队，每位学员均将得到国家级高水平教练的指导，同时提供陆地训练、舞蹈课程等，满足学员各方面的需求。
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}

export default Content;
