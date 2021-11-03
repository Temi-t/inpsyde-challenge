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
export default function save( props ) {
//{attributes, isSelected}

    const {firstName, lastName, position, description, socialLinks} = props.attributes;
console.log("Frontend from save.js ===> ", socialLinks.lenght)
	return (
		<div {...useBlockProps.save()}>
			{__(
				'***Gutenberg Overview – hello from the saved content!',
				'gutenberg-overview'
			)}

                <p>{firstName}</p>
                <p>{lastName}</p>
                <p>{position}</p>
                <p>{description}</p>
                <p>socialLinks</p>
{/*modal-popup:
            { isSelected &&
                ( <div onClick={}>{
                First/Lastname
                <p>{employee}</p>
                short description
                <p>{description}</p>
                 social links
                <ul>
                    {
                        socialLinks && social-links.map((link, i)=>())
                    }
                <ul>
               }</div> )
            }
 */}
		</div>
	);
}
