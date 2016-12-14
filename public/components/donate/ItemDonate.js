import React, {Component} from 'react';
import chunk from "lodash/chunk";


export default class ItemDonate extends Component {
  _getcollectCols(cols) {
    return cols.map((item)=> {
      let phone,time;
      if(item.phone===''){
        phone = (
          <div></div>
        );
      }else if(item.phone!==''){
        phone = (
          <div><span><img src="./public/images/donate/icon_phone_small.png"/></span>
            <p>{item.phone}</p>
          </div>
        );
      }if(item.time!==''){
        time=(
          <div><span><img src="./public/images/donate/icon_time_small.png"/></span>
            <p>{item.time}</p></div>
        );
      }

      return (
        <div className="col-md-4 donate-guide-collect-item">
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

  _getCollectRow(collectList) {
    return chunk(collectList, 3).map((item)=>{
      return (
        <div className="row">
          {this._getcollectCols(item)}
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
      <div className="item-donation">
        <h2 className="donate-way-title">物品捐赠</h2>
        <img src="./public/images/donate/Item donation.png"/>
        <div className="donate-guide">
          <h3>捐赠指南</h3>
          <div className="donate-guide-describe">
            <p>Open, prescription and out of date medicines.<br/>
              Used underwear, including socks.<br/>
              Anything previously used by an animal – such as a dog’s bed
              Copies of magazines over 6 months old.<br/>
              Computers, monitors and printers over 4 years old.
            </p>
          </div>

          <div className="donate-guide-collect container">
            <h3>捐赠物品代收点</h3>
            {this._getCollectRow(donateGuideCollectItems)}
          </div>

          <div className="container donate-guide-apply">
            <h3>申请上门收取捐赠物品</h3>
            <div>
              <p>Thank you for requesting a pick up of your donations, we will try our best to help.
                <p>Please start by filling in the pick up request form. One of our staff will then contact you to
                  make
                  arrangements for the pick up. Please allow 2 business days for us to respond, as we have a small
                  staff.
                </p>
                <p>**Due to the nature of Beijing traffic, we cannot guarantee an exact pick-up time. We will strive
                  to
                  arrive within a 1-hour window and call you if our driver is running late. Thank you for giving
                  us as
                  much notice as possible. The more notice you give us, the more likely we will be to have vans
                  and
                  trucks available at your preferred time.**
                </p>
                <p>Large items of furniture – monetary donation not necessary</p>
              </p>
            </div>
            <button>上门收取捐赠物品申请表</button>
          </div>

        </div>
      </div>
    )
  }
}

