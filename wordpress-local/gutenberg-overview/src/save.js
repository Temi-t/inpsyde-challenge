/**
 * Retrieves the translation of text. Internationalization utilities for client-side localization
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
import './styles/style.css';
export default function save( props ) {
//{attributes, isSelected}
    const {
        firstName,
         lastName,
         position,
         description,
         gitHub,
         linkedIn,
         xing,
        facebook
    } = props.attributes;
//console.log("Frontend from save.js ===> ", socialLinks.lenght)
	return (
		<div {...useBlockProps.save()}>
			{__(
				'***Gutenberg Overview – hello from the saved content!',
				'gutenberg-overview'
			)}
                {/*image*/}
                <p>{firstName}</p>
                <p>{position}</p>
                <p>{xing}</p>

{/*modal-popup:
            { isSelected &&
                ( <div onClick={}>{
                <p>{firstName}</p>
                <p>{description}</p>
                socilalinks ....         
               }</div> )
            }
 */}
		</div>
	);
}
