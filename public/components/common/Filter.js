import {Component} from 'react';
import {Modal} from 'react-bootstrap';

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: []
    };
  }

  selectButton(item) {
    this.state.selected.push(item);
    this.setState({selected: this.state.selected});
  }

  mapButtons(items) {
    return items.map((item, index) => {
      const selected = this.state.selected.some(element => element === item) ? 'active' : '';
      return <button key={index} className={'filter-button ' + selected} onClick={this.selectButton.bind(this, item)}>
        {item}
      </button>;
    });
  }

  render() {
    const locationVaries = ['北京', '上海', '河北', '河南', '杭州', '成都', '甘肃', '青海', '广西'];
    const organizationVaries = ['非营利', '社会企业', '营利'];
    const benefitVaries = ['孩子', '老年人', '白血病', '癌症', '灾难', 'HTV/AIDS', '普通的', '教育', '流浪汉', '其他'];

    return (
      <div className='static-modal' id='filter'>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>筛选</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className='location'>
              <p>地点</p>
              <div>
                {this.mapButtons(locationVaries)}
              </div>
            </div>
            <div className='organization'>
              <p>机构</p>
              <div>
                {this.mapButtons(organizationVaries)}
              </div>
            </div>
            <div className='benefit'>
              <p>受益</p>
              <div>
                {this.mapButtons(benefitVaries)}
              </div>
            </div>
          </Modal.Body>
        </Modal.Dialog>
      </div>
    );
  }
}
