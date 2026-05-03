<section id="contact" aria-labelledby="contact-title">
  <div class="contact-head">
    <h2 id="contact-title" data-i18n="contact.title">Contact</h2>
    <p class="section-subtitle" data-i18n="contact.subtitle">Get in touch for booking or consultation</p>
  </div>

  <div class="contact-content">
    <div class="contact-left">
      <ul class="contact-info">
        <li>
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/icon/Background.png" alt="" class="contact-item-icon" aria-hidden="true">
          <div class="contact-item-text">
            <p data-i18n="contact.info.addressLabel">Address</p>
            <p>Berlin, Friedrichstrasse 123</p>
          </div>
        </li>
        <li>
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/icon/Backgroun.png" alt="" class="contact-item-icon" aria-hidden="true">
          <div class="contact-item-text">
            <p data-i18n="contact.info.phoneLabel">Phone</p>
            <p><a href="tel:+49301234567">+49 30 1234567</a></p>
          </div>
        </li>
        <li>
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/icon/Backgrou.png" alt="" class="contact-item-icon" aria-hidden="true">
          <div class="contact-item-text">
            <p data-i18n="contact.info.emailLabel">Email</p>
            <p><a href="mailto:info@inkstudio.de">info@inkstudio.de</a></p>
          </div>
        </li>
        <li>
          <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/icon/Backgro.png" alt="" class="contact-item-icon" aria-hidden="true">
          <div class="contact-item-text">
            <p data-i18n="contact.info.hoursLabel">Opening Hours</p>
            <p data-i18n="contact.info.hoursValue">Mon-Sun: 10:00 - 22:00</p>
          </div>
        </li>
      </ul>
      <div class="contact-socials" aria-label="Social links" data-i18n-aria-label="contact.socialLinks">
        <a class="contact-social-btn contact-social-btn-instagram" href="#" aria-label="Instagram" data-i18n-aria-label="contact.instagram"></a>
        <a class="contact-social-btn contact-social-btn-facebook" href="#" aria-label="Facebook" data-i18n-aria-label="contact.facebook"></a>
      </div>
    </div>

    <div id="booking" aria-labelledby="booking-title">
      <h3 id="booking-title" data-i18n="booking.title">Book a Session</h3>
      <form action="#" method="post" id="booking-form" class="booking-form" novalidate>
        <p class="booking-form__summary" id="booking-summary" aria-live="polite"></p>
        <div class="booking-fields">
          <label for="name" class="booking-form__label" data-i18n="booking.nameLabel">Your Name</label>
          <input id="name" name="name" type="text" placeholder="Your Name" data-i18n-placeholder="booking.namePlaceholder" required minlength="2" maxlength="60" autocomplete="name" aria-describedby="name-error">
          <p class="booking-form__error" id="name-error" aria-live="polite"></p>

          <label for="phone" class="booking-form__label" data-i18n="booking.phoneLabel">Phone</label>
          <input id="phone" name="phone" type="tel" placeholder="Phone" data-i18n-placeholder="booking.phonePlaceholder" required minlength="7" maxlength="20" autocomplete="tel" aria-describedby="phone-error">
          <p class="booking-form__error" id="phone-error" aria-live="polite"></p>

          <label for="email" class="booking-form__label" data-i18n="booking.emailLabel">Email</label>
          <input id="email" name="email" type="email" placeholder="Email" data-i18n-placeholder="booking.emailPlaceholder" required maxlength="120" autocomplete="email" aria-describedby="email-error">
          <p class="booking-form__error" id="email-error" aria-live="polite"></p>

          <label for="service" class="booking-form__label" data-i18n="booking.serviceLabel">Select Service</label>
          <select id="service" name="service" required aria-describedby="service-error">
            <option value="" data-i18n="booking.servicePlaceholder">Select Service</option>
            <option value="traditional" data-i18n="booking.services.traditional">Traditional Tattoos</option>
            <option value="realism" data-i18n="booking.services.realism">Realism</option>
            <option value="graphics" data-i18n="booking.services.graphics">Graphics</option>
            <option value="color" data-i18n="booking.services.color">Color Tattoos</option>
            <option value="coverups" data-i18n="booking.services.coverups">Cover-ups</option>
            <option value="custom" data-i18n="booking.services.custom">Custom Designs</option>
          </select>
          <p class="booking-form__error" id="service-error" aria-live="polite"></p>

          <label for="description" class="booking-form__label" data-i18n="booking.descriptionLabel">Description of desired tattoo</label>
          <textarea id="description" name="description" rows="5" placeholder="Description of desired tattoo" data-i18n-placeholder="booking.descriptionPlaceholder" required minlength="10" maxlength="1000" aria-describedby="description-error"></textarea>
          <p class="booking-form__error" id="description-error" aria-live="polite"></p>

          <button type="submit" data-i18n="booking.submit">Send Request</button>
          <p class="booking-form__success" id="booking-success" aria-live="polite"></p>
        </div>
      </form>
    </div>
  </div>
</section>
