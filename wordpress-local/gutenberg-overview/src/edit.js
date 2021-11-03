/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *It also fixes a previous weird issue where the className property is only passed in the edit *function but not the save function in registerBlockType.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.css';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
import React, {useState} from 'react';

export default function Edit( props ) {
//{attributes, setAttributes}
//    const [person, setPerson] = useState({});
//simplified access to attributes
console.log("Attributes: ", props.attributes)
    const {firstName, lastName, position, description, socialLinks} = props.attributes;
const attributes = props.attribue;
const setAttributes = props.setAttributes;
//    const useBLK = useBlockProps();
//    console.log("UseBLockProps: ",useBLK)
    const handleChange = (e) => {
        setAttributes({ 
            ...attributes,
            [e.target.name]: e.target.value
        })
    }
//    const handleFirstName = (e) => {
//        props.setAttributes({ firstName: e.target.value})
//    }

    const handleSocialLink = (newLink) => 
        setAttributes( {socialLinks: [
            ...socialLinks,
            newLink
    ]} )
	return (
		        <div{...useBlockProps()}>
			        {__(
				        'Gutenberg Overview – hello from the editor!',
				        'gutenberg-overview'
			        )}
                    <h2>Employee Overview</h2>
                    {/*name
                    <img src={} alt="staff image"/>

                    */}
                    <input type="text" 
                        name="firstName" 
                        placeholder="Firstname######"
                        value={firstName}
                        onChange={handleChange}
                    />
                    <input type="html" 
                        name="lastName" 
                        placeholder="LastName"
                        onChange={handleChange}
                    />
                    <label htmlFor="description">Staff description:</label>
                    <textarea rows="5" cols="30"
                        name="description" 
                        value={ description }
                        onChange={ handleChange }
                    > </textarea>
                    <input type="text" 
                        name="xing" 
                        placeholder="Xing" 
                        onChange={()=>handleSocialLink(newLink)}
                    />

                    <label htmlFor="position">Choose a Position:</label>
                    <select name="position" value={position} onChange={handleChange}>
                        <option value="CEO">CEO</option>
                        <option value="Project Manager">Project Manager</option>
                        <option defaultValue value="Developer">Developer</option>
                    </select>
		        </div>
	);
}
