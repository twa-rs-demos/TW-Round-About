import React, {Component} from 'react';
import {chunk} from 'lodash';

export default class DonateGuide extends Component {

  getcollectCols(cols) {
    return cols.map((item, index)=> {
      let phone, time;
      if (item.phone === '') {
        phone = (
          <div></div>
        );
      } else if (item.phone !== '') {
        phone = (
          <div><span><img src="./public/images/donate/icon_phone_small.png"/></span>
            <p>{item.phone}</p>
          </div>
        );
      }
      if (item.time !== '') {
        time = (
          <div><span><img src="./public/images/donate/icon_time_small.png"/></span>
            <p>{item.time}</p></div>
        );
      }

      return (
        <div className="col-md-4 donate-guide-collect-item" key={index}>
          <h4>{item.title}</h4>
          <div><span><img src="./public/images/donate/icon_address_small.png"/></span>
            <p>Adjacent to Yosemite Villa Compound, Yuyang Road West, Off An Hua Road, SHUNYI,
              101302</p>
          </div>
          {phone}
          {time}
        </div>
      )
    });
  }

  getCollectRow(collectList) {
    return chunk(collectList, 3).map((item, index)=> {
      return (
        <div className="row" key={index}>
          {this.getcollectCols(item)}
        </div>
      )
    })
  }

  render() {
    const donateGuideCollectItems = [
      {
        title: 'Roundabout Store',
        address: 'Adjacent to Yosemite Villa Compound, Yuyang Road West, Off An Hua Road, SHUNYI, 101302',
        phone: '+86 137 1805 3814 ( for directions in Chinese )',
        time: 'Monday - Sunday 24hours'
      },
      {
        title: 'CCAFC office',
        address: 'F4,Zhongfu International,No.9 Zhang hua Road,Haidian District,Beijing ',
        phone: '86 10 5166 0112',
        time: 'Monday - Friday 9am - 5pm'
      },
      {
        title: 'Zarah Cafe',
        address: 'Gulou Dongdajie No.46, Dongcheng District, 100009 Beijing P.R.China',
        phone: ' 86 10 8403 9807',
        time: 'Monday - Sunday 24hours'
      },
      {
        title: 'Tuan Jie Hu Community Recycle Station',
        address: 'Room 101,Aprt1,Building 1, Bei Er Tiao, Tuanjiehu Zhong Lu, Chao Yang District,Beijing',
        phone: ' 86 10 139 1075 9629',
        time: 'Monday - Sunday 24hours'
      },
      {
        title: 'OASIS Hospital',
        address: '#9 Jiu Xian Qian Bei Lu,Chaoyang District,Beijing',
        phone: '86 10 59850405',
        time: 'Monday - Friday 9am - 5pm'
      },
      {
        title: 'Riviera Clubhouse',
        address: '#1 Xiang Jiang Bei Lu, Chaoyang Distict,Beijing',
        phone: '86 10 8450 6888',
        time: 'Monday - Sunday 6am - 10pm'
      },
      {
        title: 'Bo Ya School',
        address: '#2105 Gahood Villa, Houshayu, Shunyi Distrit, Beijing',
        phone: '86 10 158 1128 6996',
        time: 'Monday - Sunday 9am - 5pm'
      },
      {title: 'BIBA', address: '#5 Yu Min Street,Houshayu,Shunyi District,Beijing Staff Only', phone: '', time: ''},
      {
        title: 'SCOUT Real Estate',
        address: 'Room 101,F1,Building 81,No.4 Workers\'Stadim North Road, Chaoyang District,Beijing',
        phone: '86 10 8596 8873',
        time: 'Monday - Friday 9am - 6pm'
      },
      {
        title: 'Shine Hills',
        address: 'F3,Buliding 5, Shine Hills,An Xiang Street, Shunyi District, Beijing',
        phone: '86 10 6144 5671',
        time: 'Monday - Sunday 10am - 8:30pm'
      }
    ];
    return (
      <div className="donate-guide-collect container" id="donate-guide-collect-hash">
        <h3>捐赠物品代收点</h3>
        {this.getCollectRow(donateGuideCollectItems)}
      </div>
    )
  }
}
