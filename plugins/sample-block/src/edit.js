// モジュールを読み込む
import { useBlockProps } from '@wordpress/block-editor';

import { TextControl,TextareaControl } from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {
    const blockProps = useBlockProps();  // CSSのクラス名を設定するため。ブロックAPIバージョン2以降
    return (
        <div { ...blockProps }>
            <TextControl
                    value={ attributes.content }
                    label={ "タイトル" }
                onChange={ ( val ) => setAttributes( { content: val } ) }
            />
            <TextareaControl
                    value={ attributes.content2 }
                label={"コンテンツ"}
                className={"my-textarea"}
                onChange={ ( val ) => setAttributes( { content2: val } ) }
            />
        </div>
    );
}
