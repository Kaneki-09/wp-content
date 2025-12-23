import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
    const blockProps = useBlockProps.save();
    return <>
        <h1 {...blockProps}>{attributes.content}</h1>
        <p style={{ whiteSpace: 'pre-wrap' }}
            className={"my-text"}>{attributes.content2}</p></>;
}