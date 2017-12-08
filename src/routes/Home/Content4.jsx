import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import newMedia from '../../assets/newMedia.png';
import iPhone1 from '../../assets/iPhone1.png';
import iPhone2 from '../../assets/iPhone2.png';

class Content extends React.Component {

  static defaultProps = {
    className: 'content2',
  };

  // getDelay = e => e % 3 * 100 + Math.floor(e / 3) * 100 + 300;

  render() {
    const props = { ...this.props };
    delete props.isMode;
    const oneAnim = { y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' };
    // const blockArray = [
    //   { icon: 'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png', title: '企业资源管理', content: '云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。' },
    //   { icon: 'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png', title: '云安全', content: '按金融企业安全要求打造的完整云上安全体系，全方位保障金融应用及数据安全。' },
    //   { icon: 'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png', title: '云监控', content: '分布式云环境集中监控，统一资源及应用状态视图，智能分析及故障定位。' },
    //   { icon: 'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png', title: '移动', content: '一站式移动金融APP开发及全面监控；丰富可用组件，动态发布和故障热修复。' },
    //   { icon: 'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png', title: '分布式中间件', content: '金融级联机交易处理中间件，大规模分布式计算机，数万笔/秒级并发能力，严格保证交易数据统一性。' },
    //   { icon: 'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png', title: '大数据', content: '一站式、全周期大数据协同工作平台，PB级数据处理、毫秒级数据分析工具。' },
    // ];
    // const children = blockArray.map((item, i) => {
    //   const id = `block${i}`;
    //   const delay = this.getDelay(i);
    //   const liAnim = { opacity: 0, type: 'from', ease: 'easeOutQuad', delay };
    //   const childrenAnim = { ...liAnim, x: '+=10', delay: delay + 100,};
    //   return (<TweenOne
    //     component="li"
    //     animation={liAnim}
    //     key={i}
    //     id={`${props.id}-${id}`}
    //   >
    //     <TweenOne
    //       animation={{ x: '-=10', opacity: 0, type: 'from', ease: 'easeOutQuad' }}
    //       className="img"
    //       key="img"
    //     >
    //       <img src={item.icon} width="100%" />
    //     </TweenOne>
    //     <div className="text">
    //       <TweenOne key="h1" animation={childrenAnim} component="h1">
    //         {item.title}
    //       </TweenOne>
    //       <TweenOne key="p" animation={{ ...childrenAnim, delay: delay + 200 }} component="p">
    //         {item.content}
    //       </TweenOne>
    //     </div>
    //   </TweenOne>);
    // });
    return (
      <div {...props} className={`content-template-wrapper ${props.className}-wrapper`}>
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            key="h1"
            animation={oneAnim}
            component="h1"
            id={`${props.id}-title`}
            reverseDelay={100}
          >
             新媒体
          </TweenOne>
          <TweenOne
            key="p"
            animation={{ ...oneAnim, delay: 100 }}
            component="p"
            id={`${props.id}-titleContent`}
          >
            依托爱滑冰微信服务号及爱滑冰 app ，搭建最直接有效的花样滑冰交流平台，普及冰上运动相关资讯、知识与文化，为广大冰雪运动爱好者开启体育文化相结合的健康生活方式。
          </TweenOne>
          <TweenOne
            key="img"
            animation={oneAnim}
            className={`${props.className}-img`}
            id={`${props.id}-imgWrapper`}
            resetStyleBool
          >
            <span id={`${props.id}-img`}>
              <img src={iPhone1}/>
              <img src={iPhone2}/>
            </span>
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}


export default Content;
