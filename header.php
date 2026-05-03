<!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php wp_title('|', true, 'right'); ?><?php bloginfo('name'); ?></title>
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<header id="top" class="header">
  <nav aria-label="Main navigation" class="header__nav">
    <a href="<?php echo esc_url(home_url('/')); ?>#top" class="header__brand">INK STUDIO</a>
    <button class="header__burger-btn" type="button" aria-label="Toggle navigation" data-i18n-aria-label="header.toggleNav" aria-expanded="false" aria-controls="header-menu">
      <span class="header__burger-icon" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </button>
    <div class="header__menu" id="header-menu">
      <button class="header__menu-close-btn" type="button" aria-label="Close navigation" data-i18n-aria-label="header.closeNav">✕</button>
      <ul class="header__menu-list">
        <li class="header__menu-item"><a class="header__menu-link" href="#features" data-i18n="nav.features">Features</a></li>
        <li class="header__menu-item"><a class="header__menu-link" href="#gallery" data-i18n="nav.gallery">Gallery</a></li>
        <li class="header__menu-item"><a class="header__menu-link" href="#about" data-i18n="nav.about">About</a></li>
        <li class="header__menu-item"><a class="header__menu-link" href="#contact" data-i18n="nav.contact">Contact</a></li>
      </ul>
      <div aria-label="Language switch" data-i18n-aria-label="header.languageSwitch" class="header__lang-switch" role="group">
        <button class="header__lang-btn header__lang-btn--active" type="button" data-lang="en" lang="en" aria-pressed="true">EN</button>
        <button class="header__lang-btn" type="button" data-lang="de" lang="de" aria-pressed="false">DE</button>
      </div>
      <a href="#booking" class="header__book-now" data-i18n="nav.bookNow">Book Now</a>
    </div>
  </nav>
</header>
