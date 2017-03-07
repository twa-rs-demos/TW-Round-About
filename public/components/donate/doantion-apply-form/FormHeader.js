import {Component} from 'react';
import {Button} from 'react-bootstrap';
import images from '../images';

export default class FormHeader extends Component {
  render() {
    return (
      <div className='apply-form-header'>
        <Button onClick={this.props.closeApplyForm}>
          <img className='close-btn applyform-btn'
               src={images.close}/>
        </Button>
        <h3>REQUEST FOR PICK UP OF DONATIONS</h3>
        <span className='pink header-right'>*Required Fields</span>
      </div>
    );
  }
}
