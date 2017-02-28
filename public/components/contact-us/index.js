import {Component} from "react";
import Picture from "./Picture";
import ContactAddress from "./ContactAddress";
import ContactForm from "../common/ContactForm";

export default class ContactUs extends Component {

  render() {
    return (
      <div id="contact-us">
        <Picture/>
        <ContactAddress/>
        <ContactForm title='You may also fill out the form below to contact us.'/>
      </div>
    );
  }
}
