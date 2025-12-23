<?php

/**
 * Plugin name: サンプルブロック
 * Version: 0.9
 * Description:
 * License: GPL2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */

function myguten_sampleblock_register_block()
{
    register_block_type(__DIR__ . '/build');
}

add_action('init', 'myguten_sampleblock_register_block');


// function sample_block_enqueue_styles()
// {
//     wp_enqueue_style('sample_block_plugin-style', plugin_dir_url(__FILE__) . 'assets/css/style.css');
// }

// add_action(
//     'wp_enqueue_scripts',
//     'sample_block_plugin_enqueue_styles'
// );

// function sample_block_add_editor_styles()
// {
//     add_editor_style(plugin_dir_url(__FILE__) . 'assets/css/editor-style.css');
// }

// add_action(
//     'admin_init',
//     'sample_block_add_editor_styles'
// );
