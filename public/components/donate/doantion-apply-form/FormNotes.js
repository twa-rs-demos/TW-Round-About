import React, {Component} from 'react';

export default class FormNotes extends Component{
  render(){
    return (
        <div className="bottom-notes">
          <h3>NOTES:</h3>
          <ul>
            <li>Large items of fumiture - monetary donation not necessary</li>
            <li>Large volumes of donations -- monetary donation not necessary</li>
            <li>4-6 large bin bags or medium sized boxes of donations = minimum donation of 30rmb towards
              transport costs PLEASE GIVE TO THE DRIVER AT THE TIME OF PICK UP.
            </li>
            <li>1-3 large bin bags or medium sized boxes of donations = minimum donation of 50rmb towards
              transport costs PLEASE GIVE TO THE DRIVER AT THE TIME OF PICK UP.
            </li>
            <li>(If you would rather not make this monetary donation them perhaps you could consider getting
              together with friend or neighbours and combine your donations,or perhaps you can drop off your
              donations at one of your donations at one of our collection points)
            </li>
          </ul>
        </div>
    )
  }
}
