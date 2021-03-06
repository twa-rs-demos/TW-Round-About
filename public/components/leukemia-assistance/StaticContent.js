import {Component} from 'react';
import DonateMoney from '../donate/donate-way/DonateMoney';
import {Modal} from 'react-bootstrap';
import SaveLife from './SaveLife';

export default class ContentStatic extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isShowDonateMoney: false
    };
  }

  handleShowForm() {
    this.setState({
      isShowDonateMoney: true
    });
  }

  close() {
    this.setState({
      isShowDonateMoney: false
    });
  }

  render() {
    return (
      <div>
        <SaveLife />
        <div className='fact-situation'>
          <h2 className='middle-title'>你知道吗？</h2>
          <p>理论上，中国的儿童白血病的治愈率超过<span>70%</span>。但是只有<span>20%</span>的孩子能活下来。</p>
          <p>影响治愈率的是缺乏的<span>资金</span>。</p>
          <span> 你可以改变他们的命运。</span>

          <div className='fact-situation-graph'>
            <img src='http://localhost/tw-ra/public/images/ourWorkAssistance/cure rate.png'/>
            <div className='button-style'>
              <button className='I-want-donate' onClick={this.handleShowForm.bind(this)}>我要捐赠</button>
            </div>
          </div>
        </div>

        <div className={this.state.isShowDonateMoney ? '' : 'hidden'}>
          <div className='static-modal donate-money'>
            <Modal.Dialog>
              <Modal.Header>
                <div className='col-xs-offset-11 col-xs-1'>
                  <img src='http://localhost/tw-ra/public/images/home/close.png' className='image-close'
                       onClick={this.close.bind(this)}/>
                </div>
              </Modal.Header>
              <Modal.Body>
                <DonateMoney/>
              </Modal.Body>
            </Modal.Dialog>
          </div>
        </div>
      </div>
    );
  }
}
