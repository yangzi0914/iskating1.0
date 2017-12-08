import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import tongjian from '../../assets/tongjian.png';
import jiaxu from '../../assets/jiaxu.png';

class Content extends React.Component {
  static defaultProps = {
    className: 'content3',
  };
  constructor(props) {
    super(props);
    this.state = {
      man: 'tongjian',
      change: false,
      queue: 'right',
      one: { x: '-=30', opacity: 0, type: 'from' }
    };
  }

  changeClick = (val) => {
    if (val) {
      this.setState({
        man: val.item,
        queue: this.state.change ? 'top' : 'bottom',
        one: this.state.change ? { y: '+=30', opacity: 0, type: 'from' } : { y: '-=30', opacity: 0, type: 'from' },
        change: !this.state.change
      });
    }
  }

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const animType = {
      queue: isMode ? 'bottom' : this.state.queue,
      one: isMode ? { y: '+=30', opacity: 0, type: 'from' }
        : this.state.one,
    }
    const children = ['tongjian', 'jiaxu'].map((item, index) => {
      return (<li key={index}
        className={item}
        style={{opacity: `${this.state.man == item ? '1' : '.2' }`}}
        onClick={() => {
          this.changeClick({item})
        }}
      ></li>);
    })
    return (
      <div
        {...props}
        className={`content-template-wrapper content-half-wrapper ${props.className}-wrapper`}
      >
        {isMode ? undefined : (<ul
          key='ul'
          className='change'
        >
          {children}
        </ul>)}
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
          style={{display: `${this.state.man == 'tongjian' ? 'block' : 'none' }`}}
        >
          <TweenOne
            key="img"
            animation={animType.one}
            className={`${props.className}-img`}
            id={`${props.id}-imgWrapper`}
            resetStyleBool
            updateReStart
          >
            <span id={`${props.id}-img`}>
              <img src={tongjian}/>
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
            <p key="p" id={`${props.id}-content`}>
              与搭档庞清一起，中国最优秀的花样滑冰双人滑运动员，2006/2010 年两届世界锦标赛冠军，2010 年温哥华冬奥会亚军，五届四大洲锦标赛冠军，2008/2009 赛季大奖赛总决赛冠军。
            </p>
            <h4 key="h4" id={`${props.id}-title`}>
              佟健 - 创始人
            </h4>
          </QueueAnim>
        </OverPack>
        <OverPack
          className={`content-template ${props.className}`}
          id={props.id}
          style={{display: `${this.state.man == 'jiaxu' ? 'block' : 'none' }`}}
        >
          <TweenOne
            key="img"
            animation={animType.one}
            className={`${props.className}-img`}
            id={`${props.id}-imgWrapper`}
            resetStyleBool
            updateReStart
          >
            <span id={`${props.id}-img`}>
              <img src={jiaxu}/>
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
            <p key="p" id={`${props.id}-content`} style={{fontSize: '14px', lineHeight: '28px'}}>
              具有深厚的品牌与零售经验，着力建设 CRM 为核心的营销与服务体系，并以此为依托，建设 “顾客体验营销”，成立 “顾客体验团队”，改变行业内“场地为王” 的经营手法。
              毕业于山东大学，后在北京体育大学攻读体育管理研究生。专注于体育行业工作近 20 年，见证了体育行业的成长与爆发。
              先后任职于李宁品牌，adidas China (2005-2010)，负责奥林匹克业务和品牌营销业务；2010 年开始转入户外运动领域，在奥索卡品牌，KOLONSPORT 负责公司运营。
            </p>
            <h4 key="h4" id={`${props.id}-title`}>
              贾旭 - 联合创始人
            </h4>
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}


export default Content;
