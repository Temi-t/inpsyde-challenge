//frontend
import { registerBlockType } from '@wordpress/blocks';
//import './styles/style-index.scss';
import './styles/style-index.css';
import Edit from './edit';
import save from './save';




registerBlockType('guten-plugin/employee-overview', {
	edit: Edit,
	save,
    deprecated: [
        {
            attribues: {},
            save(){
                return(
                    <div style={{background:"greed", height: "100px",width: "200px"}}>
                    </div>
                )
            }
        }
    ]
});

