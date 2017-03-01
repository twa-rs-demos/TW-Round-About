import {Component} from 'react';
import Charity from './Charity';
import Pagination from '../common/Pagination';

export default class CharitiesList extends Component {
  render() {
    const items = [{
      name: 'AGS',
      address: 'Yuyang Road West, Adjacent to Yosemite Villas, Houshayu Town, Shunyi District',
      phoneNumber: '010-86753478',
      description: 'Roundabout Book Nook AT YCIS Beijing Yew Chung International School of Beijing (YCIS Beijing) will hosta book nook on behalf of Roundabout. This ',
      tags: ['Tag1', 'Tag2', 'Tag3']
    }, {
      name: 'AGS',
      address: 'Yuyang Road West, Adjacent to Yosemite Villas, Houshayu Town, Shunyi District',
      phoneNumber: '010-86753478',
      description: 'Roundabout Book Nook AT YCIS Beijing Yew Chung International School of Beijing (YCIS Beijing) will hosta book nook on behalf of Roundabout. This ',
      tags: ['Tag1', 'Tag2', 'Tag3']
    }, {
      name: 'AGS',
      address: 'Yuyang Road West, Adjacent to Yosemite Villas, Houshayu Town, Shunyi District',
      phoneNumber: '010-86753478',
      description: 'Roundabout Book Nook AT YCIS Beijing Yew Chung International School of Beijing (YCIS Beijing) will hosta book nook on behalf of Roundabout. This ',
      tags: ['Tag1', 'Tag2', 'Tag3']
    }, {
      name: 'AGS',
      address: 'Yuyang Road West, Adjacent to Yosemite Villas, Houshayu Town, Shunyi District',
      phoneNumber: '010-86753478',
      description: 'Roundabout Book Nook AT YCIS Beijing Yew Chung International School of Beijing (YCIS Beijing) will hosta book nook on behalf of Roundabout. This ',
      tags: ['Tag1', 'Tag2', 'Tag3']
    }];

    const charities = items.map((item, index) => {
      return <Charity charity={item} key={index}/>;
    });

    return (<div>
      {charities}
      <Pagination totalPage='3'/>
    </div>);
  }
}
