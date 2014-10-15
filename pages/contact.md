---
layout: page
title: Contact
heading: Contact us
permalink: /contact/
---


<div class="contact-page"> <!-- container -->
  
  <div class="col1">

    <div class="form">
      <form action="http://getsimpleform.com/messages?form_api_token=7ec54017f36cfdf8d33a57997d400b6f" method="post">
        <input type='hidden' name='redirect_to' value='{{ site.url }}/contact/receipt' />
        <fieldset>
          <legend>Your details</legend>
          <label>Name
            <input type='text' name='name' required />
          </label>
          <label>Email
            <input type='email' name='email' required />
          </label>
          <label>Phone
            <input type='tel' name='tel' required />
          </label>
        </fieldset>
        <fieldset>
          <legend>Your enquiry</legend>
          <label>Subject
            <input type='text' name='subject' required></input>
          </label>
          <label>Message
            <textarea name='body' required cols='5'></textarea>
          </label>
        </fieldset>
        <input type='submit' value='Submit' />
      </form>
    </div>

    <div class="address">
    </div>

  </div>

  <div class="col2">

    <div class="note">
      <p>If you have any questions about our services, would like to arrange a demo or request a call-back at an appropriate time, feel free to send us an enquiry.</p>
    </div>

    <div class="map">
      <div class="google-maps">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9920.199589095977!2d0.6443162999994371!3d51.567318789026416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8dbc63cdbd73d%3A0xe1b04d568dac65b!2sSouthend-on-Sea%2C+Leigh-on-Sea%2C+Southend-on-Sea+SS9+5LY!5e0!3m2!1sen!2suk!4v1412065660556" width="600" height="450" frameborder="0" style="border:0"></iframe>
      </div>
    </div>

    <div class="address">
      <h3 id="address">Address</h3>
      <p>
        {{ site.address }}
      </p>
      <h3 id="phone">Telephone</h3>
      <p>{{ site.telephone }}</p>

      <h3 id="email">Email</h3>
      <p>
        <a href="mailto:{{ site.email }}">
          {{ site.email }}
        </a>
      </p>
    </div>

  </div>

</div>