import { registerFormatType, toggleFormat } from '@wordpress/rich-text';
import { BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';

const MyCustomButton = ( { isActive, onChange, value } ) => {
    return (
        <BlockControls>
            <ToolbarGroup>
                <ToolbarButton
                    icon="admin-appearance" // 画面で表示されるアイコン https://developer.wordpress.org/resource/dashicons/
                    title="下線" // 名前
                    onClick={ () => {
                        onChange(
                            toggleFormat( value, {
                                type: 'plugin-underline/underline', // registerFormatType関数の引数と同じ名称
                            } )
                        );
                    } }
                    isActive={ isActive }
                />
            </ToolbarGroup>
        </BlockControls>
    );
};

registerFormatType( 'plugin-underline/underline', {
    title: '下線', // 名前
    tagName: 'span', // HTMLタグ
    className: 'underline', // HTMLクラス
    edit: MyCustomButton,
} );