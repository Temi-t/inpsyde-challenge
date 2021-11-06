//editor
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
import './styles/index.css';

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
//simplified access to attributes
    console.log("Attributes: ", props.attributes)
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

    const attributes = props.attributes;
    const setAttributes = props.setAttributes;

    const handleChange = (e) => {
        setAttributes({ 
            ...attributes,
            [e.target.name]: e.target.value
        })
    }
    const clearFields = () => {
//        e.target.value="";
        const attributeCopy = {...attribute}
        let items;
        for(items in attributeCopy){
            attributeCopy[items] = "";
        }
        setAttributes(attributeCopy)
    }

	return (
		        <div{...useBlockProps()}>
			        {__(
				        'Gutenberg Overview – hello from the editor!',
				        'gutenberg-overview'
			        )}
                    <div className="block__container">
                        <h2 className="firstClass">Employee Details</h2>
                        {/*name
                        <img src={} alt="staff image"/>

                        */}
                        <div className="about">
                            <div className="employee-name">
                                <input type="text" 
                                    name="firstName" 
                                    placeholder="Firstname"
                                    value={firstName}
                                    onChange={handleChange}
                                />
                                <input type="text" 
                                    name="lastName" 
                                    placeholder="LastName"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="img-position">
                                <label htmlFor="staff-image">select image: </label>
                                <input type="file" 
                                    id="img"
                                    name="staff-image" 
                                    placeholder="Image"
                                    accept="image/*"
                                />
                                <label htmlFor="position">Position: </label>
                                <select name="position" className="position" value={position}onChange={handleChange}>
                                    <option value="CEO">CEO</option>
                                    <option value="Project Manager">Project Manager</option>
                                    <option defaultValue value="Developer">Developer</option>
                                </select>
                            </div>
                        </div>

                            <label htmlFor="description"></label>
                            <textarea rows="5" cols="30"
                                name="description" 
                                placeholder="Empolyee description:"
                                onChange={ handleChange }
                            >
                                { description }
                            </textarea>

                            <div className="socials">
                                <label htmlFor="github">
                                    <input type="text" 
                                        name="github" 
                                        placeholder="GitHub" 
                                        onChange={handleChange}
                                    />
                                </label>
                                <label htmlFor="linkedin">
                                    <input type="text" 
                                        name="linkedin" 
                                        placeholder="LinkedIn" 
                                        onChange={handleChange}
                                    />
                                </label>
                                <label htmlFor="xing">
                                    <input type="text" 
                                        name="xing" 
                                        placeholder="Xing" 
                                        onChange={handleChange}
                                    />
                                </label>
                                <label htmlFor="facebook">
                                    <input type="text" 
                                        name="facebook" 
                                        placeholder="Facebook" 
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            <button type="button" onClick={clearFields} className="btn">Clear fields</button>
                    </div>
		        </div>
	);
}
