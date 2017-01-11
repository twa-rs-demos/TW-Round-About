import {Component} from 'react';

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
    const locationVaries = ['Beijing', 'Shanghai', 'Hebei', 'Henan', 'Hangzhou', 'Chengdu', 'Gansu', 'Qinghai', 'Guangxi'];
    const organizationVaries = ['Nonprofit', 'Social Enterprise', 'For Profit'];
    const benefitVaries = ['Children', 'Eldly', 'Leukemia', 'Cancer', 'Disaster', 'HTV/AIDS', 'General', 'Education', 'Homeless', 'Other'];

    return (
      <div className="modal fade" id="filter" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Filter</h4>
            </div>
            <div className="modal-body">
              <div className='location'>
                <p>Location</p>
                <div>
                  {this.mapButtons(locationVaries)}
                </div>
              </div>
              <div className='organization'>
                <p>Organization</p>
                <div>
                  {this.mapButtons(organizationVaries)}
                </div>
              </div>
              <div className='benefit'>
                <p>Benefit</p>
                <div>
                  {this.mapButtons(benefitVaries)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
