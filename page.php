<?php get_header(); ?>

<main class="page-content">
  <div class="container page-content__inner">
    <?php
    while ( have_posts() ) :
      the_post();
      the_content();
    endwhile;
    ?>
  </div>
</main>

<?php get_footer(); ?>
