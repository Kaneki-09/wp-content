import {registerBlockType} from '@wordpress/blocks';

import Edit from './edit';
import save from './save';
import metadata from './block.json';
import '../css/style.css';
import '../css/editor-style.css';

registerBlockType( metadata.name, {
    /**
     * ブロックのプレビューの時に使う値。無でもOK
     */
    example: {
        attributes: {
            content: 'あいうえお',
        },
    },

    edit: Edit,

    save,
} );