import React from 'react';
import enquire from 'enquire.js';
import './css/company.css';

import Nav from './../common/Nav';
import Footer from './../common/Footer';
import Download from './../common/Download';

export default class Company extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMode: false,
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    this.enquireScreen((isMode) => {
      this.setState({ isMode });
    });
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
    return (
      <div>
        <Nav id="nav_0_0" key="nav_0_0" isMode={this.state.isMode} selectedKeys="2" />
        <div className="company_banner" />
        <div className="width">
          <div className="company_main">
            <h2 className="company_title">公司简介</h2>
            <p className="company_content">翼翔冰雪® 由花样滑冰世界冠军佟健先生于 2015 年 7 月创办，经过近 2 年的发展，依托庞清佟健冰上中心为基地，现已形成了由体育 + 教育、体育 + 文化和新媒体构成的全面的冰雪运动服务平台。</p>
            <p className="company_content">佟健与庞清搭档曾获得 2010 年温哥华冬奥会双人银牌，2006 年和 2010 年两届世界花样滑冰锦标赛双人冠军，并在 2014 年索契冬奥会上担任中国代表团开幕式旗手，从事花样滑冰事业三十余年，有辉煌也有坎坷，但不悔用冰刀刻写深情与坚持，退役后创办翼翔冰雪，用真心、用真情推广冰雪项目。</p>
            <p className="company_content">庞清佟健冰上中心目前拥有教练员十余名，均为前国家队运动员或教练员，拥有全国最顶尖的教练员资源，旨在开展花样滑冰单双人及队列滑优质高端培训，拓展花样滑冰人群基础。</p>
            <p className="company_content">同时打造爱滑冰表演团队，立志于将花样滑冰与中国文化相结合，打造具有中国特色的冰上舞台剧，更广泛的推广花样滑冰项目，宣扬中国文化。</p>
            <p className="company_content">此外，翼翔冰雪®在佟健先生的带领下用实际行动回馈大众，每月举办一次爱滑冰®公益课，现已成功举办26 场，并承诺爱滑冰®公益课将一直服务大众直到 2022 年北京冬奥会。而且积极响应国家号召推动冰雪进校园活动，已在 10 余所学校开展 “冰雪知识讲座”，并于 2016 年 11 月携手清华附中打造国内首例大型校园冰上剧，用全新的推广方式在校园播下冰雪种子，引领校园冰雪发展，把冰雪进校园落到实处。</p>
            <p className="company_content">投稿邮箱：iskating@foxmail.com<br />联系与合作：xu.jia@iskating.cn</p>
          </div>
        </div>
        <Footer id="footer_0_0" key="footer_0_0" isMode={this.state.isMode} />
        {this.state.isMode ? (<Download id="download_0_0" key="download_0_0" />) : undefined}
      </div>
    );
  }
}
