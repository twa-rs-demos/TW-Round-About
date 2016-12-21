import {Component} from 'react';

export default class PrivacyPolicy extends Component {

  render() {
    return (
      <div className="Legal">
        <h2 className="Legal-title">Privacy Policy</h2>
        <p className="Legal-content">This privacy policy sets out how “Roundabout” uses and protects any information
          that you give“Roundabout”when
          you use this website.</p>
        <p className="Legal-content">“Roundabout” is committed to ensuring that your privacy is protected. Should we ask
          you to provide certain
          information by which you can be identified when using this website, then you can be assured that it will only
          be used in accordance with this privacy statement.</p>
        <p className="Legal-content">“Roundabout” may change this policy from time to time by updating this page. You
          should check this page from
          time to time to ensure that you are happy with any changes. This policy is effective from 26-3-2013.
        </p>
        <div className="item-sections">
          <p className="item-title">what we collect</p>
          <p>We may collect the following information:</p>
          <ul>
            <li className="li-item">name and job title</li>
            <li className="li-item">contact information including email address</li>
            <li className="li-item">demographic information such as postcode, preferences and interests</li>
            <li className="li-item">other information relevant to donor surveys</li>
          </ul>
        </div>
        <div className="item-sections">
          <p className="item-title">What we do with the information we gather</p>
          <p>We require this information to understand your needs and provide you with a better service, and in
            particular for the following reasons:</p>
          <ul>
            <li className="li-item">Internal record keeping.</li>
            <li className="li-item">We may use the information to improve our services to charity.</li>
            <li className="li-item">We may periodically send emails about events, special appeals or other information
              which we think you
              may
              find interesting using the email address which you have provided.
            </li>
          </ul>
        </div>

        <div className="item-sections">
          <p className="item-title">Security</p>
          <p>We are committed to ensuring that your information is secure. In order to prevent unauthorised access or
            disclosure we have put in place suitable physical, electronic and managerial procedures to safeguard and
            secure the information we collect online.</p>
        </div>

        <div className="item-sections">
          <p className="item-title">How we use cookies</p>
          <p className="Legal-content">A cookie is a small file which asks permission to be placed on your computer’s
            hard drive. Once you agree,
            the file is added and the cookie helps analyse web traffic or lets you know when you visit a particular
            site.
            Cookies allow web applications to respond to you as an individual. The web application can tailor its
            operations to your needs, likes and dislikes by gathering and remembering information about your
            preferences.</p>

          <p className="Legal-content">We use traffic log cookies to identify which pages are being used. This helps us
            analyse data about webpage
            traffic and improve our website in order to tailor it to customer needs. We only use this information for
            statistical analysis purposes and then the data is removed from the system.</p>
          <p className="Legal-content">Overall, cookies help us provide you with a better website, by enabling us to
            monitor which pages you find
            useful and which you do not. A cookie in no way gives us access to your computer or any information about
            you,
            other than the data you choose to share with us.</p>
          <p>You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can
            usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full
            advantage of the website.</p>
        </div>
        <div className="item-sections">
          <p className="item-title">Links to other websites</p>
          <p className="Legal-content">Our website may contain links to other websites of interest. However, once you
            have used these links to
            leave
            our site, you should note that we do not have any control over that other website. Therefore, we cannot be
            responsible for the protection and privacy of any information which you provide whilst visiting such sites
            and
            such sites are not governed by this privacy statement. You should exercise caution and look at the privacy
            statement applicable to the website in question.</p>
          <p className="Legal-content">We will not sell, distribute or lease your personal information to third parties
            unless we have your
            permission or are required by law to do so. We may use your personal information to send you information
            about
            third parties which we think you may find interesting if you tell us that you wish this to happen.</p>

          <p className="Legal-content">You may request details of personal information which we hold about you under the
            Data Protection Act 1998.
            A
            small fee will be payable. If you would like a copy of the information held on you please write to“
            Roundabout, Adjacent to Yosemite Villa Compound, Yuyang Road West, Off An Hua Road, SHUNYI, Beijing 101302.
            P.R. CHINA
          </p>
          <p>If you believe that any information we are holding on you is incorrect or incomplete, please write to or
            email us as soon as possible, at the above address. We will promptly correct any information found to be
            incorrect.</p>
        </div>
      </div>
    );
  }
}
