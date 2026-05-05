<?php get_header(); ?>

<main class="not-found" aria-labelledby="not-found-title">
  <div class="container not-found__container">
    <div class="not-found__code" aria-hidden="true">404</div>
    <h1 class="not-found__title" id="not-found-title">Page not found</h1>
    <p class="not-found__text">The page you're looking for doesn't exist or has been moved.</p>
    <div class="not-found__actions">
      <a href="<?php echo esc_url( home_url('/') ); ?>" class="not-found__btn not-found__btn--primary">Back to Home</a>
      <a href="<?php echo esc_url( home_url('/#contact') ); ?>" class="not-found__btn not-found__btn--secondary">Contact Us</a>
    </div>
  </div>
</main>

<?php get_footer(); ?>
