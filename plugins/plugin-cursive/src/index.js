import { registerFormatType, toggleFormat } from '@wordpress/rich-text';
import { BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';

const MyCustomButton = ( { isActive, onChange, value } ) => {
    return (
        <BlockControls>
            <ToolbarGroup>
                <ToolbarButton
                    icon="edit" // 画面で表示されるアイコン https://developer.wordpress.org/resource/dashicons/
                    title="筆記体フォント" // 名前
                    onClick={ () => {
                        onChange(
                            toggleFormat( value, {
                                type: 'plugin-cursive/cursive', // registerFormatType関数の引数と同じ名称
                            } )
                        );
                    } }
                    isActive={ isActive }
                />
            </ToolbarGroup>
        </BlockControls>
    );
};

registerFormatType( 'plugin-cursive/cursive', {
    title: '筆記体フォント', // 名前
    tagName: 'span', // HTMLタグ
    className: 'cursive', // HTMLクラス
    edit: MyCustomButton,
} );