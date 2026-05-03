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

	wp_localize_script( 'artonskin-main', 'artonskinData', array(
		'restUrl' => esc_url_raw( rest_url() ),
		'nonce'   => wp_create_nonce( 'wp_rest' ),
	) );
}
add_action( 'wp_enqueue_scripts', 'artonskin_enqueue_assets' );

// CPT: Testimonials
function artonskin_register_testimonials_cpt() {
	register_post_type( 'testimonials', array(
		'public'              => false,
		'show_ui'             => true,
		'show_in_rest'        => true,
		'rest_base'           => 'testimonials',
		'label'               => 'Testimonials',
		'menu_icon'           => 'dashicons-format-quote',
		'supports'            => array( 'title', 'editor', 'custom-fields' ),
	) );
}
add_action( 'init', 'artonskin_register_testimonials_cpt' );

// Expose custom meta fields in REST API
function artonskin_register_testimonials_rest_fields() {
	$fields = array(
		'rating'      => '_testimonial_rating',
		'author_name' => '_testimonial_author',
		'position'    => '_testimonial_position',
	);

	foreach ( $fields as $field_name => $meta_key ) {
		register_rest_field(
			'testimonials',
			$field_name,
			array(
				'get_callback' => function( $post ) use ( $meta_key ) {
					return get_post_meta( $post['id'], $meta_key, true );
				},
				'schema' => array( 'type' => 'string' ),
			)
		);
	}
}
add_action( 'rest_api_init', 'artonskin_register_testimonials_rest_fields' );

// REST API endpoint for booking form
function artonskin_register_booking_endpoint() {
	register_rest_route( 'artonskin/v1', '/booking', array(
		'methods'             => 'POST',
		'callback'            => 'artonskin_handle_booking',
		'permission_callback' => '__return_true',
		'args'                => array(
			'name'        => array( 'required' => true, 'sanitize_callback' => 'sanitize_text_field' ),
			'phone'       => array( 'required' => true, 'sanitize_callback' => 'sanitize_text_field' ),
			'email'       => array( 'required' => true, 'sanitize_callback' => 'sanitize_email' ),
			'service'     => array( 'required' => true, 'sanitize_callback' => 'sanitize_text_field' ),
			'description' => array( 'required' => true, 'sanitize_callback' => 'sanitize_textarea_field' ),
		),
	) );
}
add_action( 'rest_api_init', 'artonskin_register_booking_endpoint' );

function artonskin_handle_booking( WP_REST_Request $request ) {
	$name        = $request->get_param( 'name' );
	$phone       = $request->get_param( 'phone' );
	$email       = $request->get_param( 'email' );
	$service     = $request->get_param( 'service' );
	$description = $request->get_param( 'description' );

	$post_id = wp_insert_post( array(
		'post_title'   => sanitize_text_field( $name . ' — ' . $service ),
		'post_content' => sanitize_textarea_field( $description ),
		'post_status'  => 'private',
		'post_type'    => 'booking_request',
		'meta_input'   => array(
			'_booking_name'    => $name,
			'_booking_phone'   => $phone,
			'_booking_email'   => $email,
			'_booking_service' => $service,
		),
	) );

	if ( is_wp_error( $post_id ) ) {
		return new WP_REST_Response( array( 'message' => 'Could not save booking.' ), 500 );
	}

	return new WP_REST_Response( array( 'message' => 'Booking received.' ), 200 );
}
