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
//    console.log("Attributes: ", props.attributes)
    const {
        firstName,
         lastName,
         position,
         description,
         gitHub,
         linkedIn,
         xing,
        facebook,
        staffImage
    } = props.attributes;

    const attributes = props.attributes;
    const setAttributes = props.setAttributes;

    const handleChange = (e) => {
//        if(e.target.name === "")return;
        setAttributes(prevAttributes => ({ 
            ...prevAttributes,
            [e.target.name]: e.target.value
        }));
    }
    const clearFields = () => {
//        e.target.value="";
        const attributeCopy = {...attributes}
        let items;
        for(items in attributeCopy){
            attributeCopy[items]=""
        }
        setAttributes(attributeCopy)
//        setAttributes(attributeCopy)
    }
            console.log("New attributes: ", attributes)

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
                                    value={firstName || ""}
                                    onChange={handleChange}
                                    required
                                />
                                <input type="text" 
                                    name="lastName" 
                                    value={lastName || ""}
                                    placeholder="LastName"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="img-position">
                                <label htmlFor="staffImage">select image: </label>
                                {/*<input type="file" 
                                    id="img"
                                    name="staffImage" 
                                    value={staffImage || ""}
                                    accept="image/*"
                                    onChange={}
                                />*/}
                                <label htmlFor="position">Position: </label>
                                <select name="position" className="position" value={position || ""} onChange={handleChange}>
                                    <option value="CEO">CEO</option>
                                    <option value="Project Manager">Project Manager</option>
                                    <option value="Developer">Developer</option>
                                </select>
                            </div>
                        </div>

                            <label htmlFor="description"></label>
                            <textarea rows="5" cols="30"
                                name="description"
                                value={description || ""} 
                                placeholder="Empolyee description:"
                                onChange={ handleChange }
                            >
                                { description }
                            </textarea>

                            <div className="socials">
                                <label htmlFor="gitHub">
                                    <input type="text" 
                                        name="gitHub"
                                        value={gitHub || ""} 
                                        placeholder="GitHub" 
                                        onChange={handleChange}
                                    />
                                </label>
                                <label htmlFor="linkedIn">
                                    <input type="text" 
                                        name="linkedIn" 
                                        value={linkedIn || ""} 
                                        placeholder="LinkedIn" 
                                        onChange={handleChange}
                                    />
                                </label>
                                <label htmlFor="xing">
                                    <input type="text" 
                                        name="xing"
                                        value={xing || ""}  
                                        placeholder="Xing" 
                                        onChange={handleChange}
                                    />
                                </label>
                                <label htmlFor="facebook">
                                    <input type="text" 
                                        name="facebook" 
                                        value={facebook || ""} 
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
