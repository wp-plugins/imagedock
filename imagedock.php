<?php
/*
 * Plugin Name: ImageDock
 * Version: 1.0
 * @package WordPress
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) exit;

// Load plugin class files
require_once( 'includes/class-imagedock.php' );

function imagedock () {
	$instance = imagedock::instance( __FILE__, '1.0.0' );
	return $instance;
}

imagedock();