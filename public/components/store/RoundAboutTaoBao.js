import {Component} from 'react';

export default class RoundAboutTaoBao extends Component {
  render() {
    const content = `Roundabout is a social enterprise headed by volunteers.We provide a free 
\tservice connecting those who wish togive, be that monetaryor otherwise, to those in need. 
\tStarted in 2008, we were the first charity store inmainland China. We now give support to 
\t48 charitable organizations in the Beijing area and many more throughoutChina, Inner Mongolia and Mongolia.`;

    return (<div className='store-taobao'>
      <h2 className='store-taobao-title text-center round-store-title'>众爱商店是淘宝的好地方</h2>
      <p className='content taobao-statement'>{content}</p>
    </div>);
  }
}
