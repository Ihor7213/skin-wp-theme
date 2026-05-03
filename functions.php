<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Theme setup
function artonskin_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );
}
add_action( 'after_setup_theme', 'artonskin_setup' );

// Enqueue styles and scripts
function artonskin_enqueue_assets() {
	wp_enqueue_style(
		'artonskin-style',
		get_template_directory_uri() . '/assets/css/theme.css',
		array(),
		'1.0.0'
	);

	wp_enqueue_script(
		'artonskin-main',
		get_template_directory_uri() . '/assets/js/main.js',
		array(),
		'1.0.0',
		true
	);
}
add_action( 'wp_enqueue_scripts', 'artonskin_enqueue_assets' );
