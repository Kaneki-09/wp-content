<?php
/*
 * Plugin Name: Plugin Underline
 * Description: Plugin Underline
 * Author: Sushil Thapa
 * Version: 1.0
 */

add_action(
    'enqueue_block_editor_assets',
    function () {
        $format_api_file = plugin_dir_path(__FILE__) . 'build/index.asset.php';

        if (file_exists($format_api_file)) {
            $assets = include $format_api_file;
            wp_enqueue_script(
                'plugin-underline', // WPの管理上、このファイルに付けられる名前(インデックス)
                plugin_dir_url(__FILE__) . '/build/index.js',
                $assets['dependencies'],
                $assets['version'],
                true
            );
        }
    }
);

// CSSファイルを追加する関数
function myplugin_underline_enqueue_styles()
{
    // style.css を読み込む
    wp_enqueue_style('myplugin_underline-style', plugin_dir_url(__FILE__) . 'style.css');
}
// [CSSファイルを追加する関数]を実行する
add_action('wp_enqueue_scripts', 'myplugin_underline_enqueue_styles');

// CSSファイルを編集画面に追加する関数
function myplugin_underline_add_editor_styles()
{
    // 編集画面のcss
    add_editor_style(plugin_dir_url(__FILE__) . 'assets/css/editor-style.css');
}
// [CSSファイルを編集画面に追加する関数]を実行する
add_action('admin_init', 'myplugin_underline_add_editor_styles');
