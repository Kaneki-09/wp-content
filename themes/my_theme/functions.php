<?php
// 画像ブロックへのスタイル追加
register_block_style(
    'core/image', // 対象ブロックを指定
    array(
        'name' => 'custom', // システム内の名前(英数字)
        'label' => 'カスタム', // 表示される名前
        'inline_style' => '.is-style-custom img{
border-radius:30%;
}' // スタイルを書く
    )
);

register_block_style(
    'core/media-text',
    array(
        'name' => 'balloon',
        'label' => 'Balloon Style',
    )
);

function mytheme_enqueue_styles()
{
    // style.css を読み込む
    wp_enqueue_style('mytheme-style', get_stylesheet_uri());
}
// [CSSファイルを追加する関数]を実行する
add_action('wp_enqueue_scripts', 'mytheme_enqueue_styles');

// CSSファイルを編集画面に追加する関数
function mytheme_add_editor_styles()
{
    // 編集画面のcss
    add_theme_support('editor-styles');
    add_editor_style('editor-style.css');
}
// [CSSファイルを編集画面に追加する関数]を実行する
add_action('after_setup_theme', 'mytheme_add_editor_styles');
// add_action('admin_init', 'mytheme_add_editor_styles');
