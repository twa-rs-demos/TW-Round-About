import {Component} from 'react';
import DonateWayModal from './DonateWayModal';
import RequestFormModal from '../donate/doantion-apply-form/index';
import {Modal, Button} from 'react-bootstrap';
import images from './images';

export default class ShoppingForChildren extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDonateWayModal: false,
      showRequestFormModal: false
    };
  }

  showDonateWayModal() {
    this.setState({showDonateWayModal: true});
  }

  hideDonateWayModal() {
    this.setState({showDonateWayModal: false});
  }

  showRequestFormModal() {
    this.setState({showRequestFormModal: true});
  }

  hideRequestFormModal() {
    this.setState({showRequestFormModal: false});
  }

  render() {
    return (<div>
      <h2 className='shopping-title text-center round-store-title'>通过购物来改变孩子的<span>命运</span></h2>
      <p className='text-center shopping-statement'>所得利润用于支持和帮助困境群体。</p>
      <div className='col-xs-6 two-dimension-code no-padding'>
        <div className='col-xs-6 inline text-right no-padding relative-positon'>
          <img className='store-picture' src={images.wechat01} alt=''/>
          <span className='store-name'>微信商城</span>
        </div>
        <div className='col-xs-6 inline text-right no-padding relative-positon'>
          <img className='store-picture' src={images.taobao01} alt=''/>
          <span className='store-name'>淘宝商城</span>
        </div>
      </div>
      <div className='col-xs-6 donate-button'>
        <div className='col-xs-11 text-right'>
          <button className='donate-type' onClick={this.showDonateWayModal.bind(this)}>捐款</button>
          <button className='donate-type' onClick={this.showRequestFormModal.bind(this)}>捐物</button>
          <div>... Or if you’re in the giving mood</div>

          <Modal show={this.state.showRequestFormModal} onHide={this.hideRequestFormModal.bind(this)}>
            <Modal.Header closeButton>
              <h3>REQUEST FOR PICK UP OF DONATIONS</h3>
            </Modal.Header>
            <Modal.Body>
              <RequestFormModal/>
            </Modal.Body>
          </Modal>

        </div>
        {this.state.showDonateWayModal ?
          <DonateWayModal hideModal={this.hideDonateWayModal.bind(this)}/> : ''}
        {this.state.showRequestFormModal ?
          <RequestFormModal closeApplyForm={this.hideRequestFormModal.bind(this)}/> : ''}
      </div>
    </div>);
  }
}
