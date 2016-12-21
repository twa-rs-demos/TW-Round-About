import React, {Component} from 'react';

export default class FormDonateThings extends Component {

  componentDidMount() {
    this.addCol();
  }

  addCol() {
    let col =<div className="row">
      <div className="col-md-2 no-padding">
        <input type="text" placeholder=""/>
      </div>
      <div className="col-md-5 no-padding">
        <input type="text" placeholder=""/>
      </div>
      <div className="col-md-5 no-padding">
        <input type="text" placeholder=""/>
      </div>
    </div>;
    $('apply-form-things-add').append(col);
  }

  delCol(){
    $('.apply-form-things-add').last().remove();
  }

  render() {
    let describe = 'On the form below, please list the items that you wish to have picked up. There is no need to itemize small items- "1 x box of clothing + 1 x box of kitchen wear" Would be suffice.Please do however list larger items as this will help us to assess the size of vehicle needed to do your pick up.';
    let addNew = <div className="row">
      <div className="col-md-2 col">
        <input type="text" placeholder=""/>
      </div>
      <div className="col-md-5 col">
        <input type="text" placeholder=""/>
      </div>
      <div className="col-md-5 col">
        <input type="text" placeholder=""/>
      </div>
    </div>;
    return (
      <div className="call-language">
        <h3>Would you prefer the call from Rounfabout to be in which language?</h3>
        <div className="checkboxes">
          <p className="checkbox-item"><input type="checkbox" className="call-language-checkbox"/>English</p>
          <p className="checkbox-item"><input type="checkbox" className="call-language-checkbox"/>Chinese</p>
          <p className="checkbox-item"><input type="checkbox" className="call-language-checkbox"/>Either</p>
        </div>
        <p>{describe}</p>
        <div className="container apply-form-things-add">
          <div className="row">
            <div className="col-md-2">Quantity</div>
            <div className="col-md-5">Description</div>
            <div className="col-md-5">Value of High Priced Items</div>
          </div>
          <div className="row">
            <div className="col-md-2 no-padding">
              <input type="text" placeholder="Number"/>
            </div>
            <div className="col-md-5 no-padding">
              <input type="text" placeholder="box of clothing"/>
            </div>
            <div className="col-md-5 no-padding">
              <input type="text" placeholder="300rmb"/>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
