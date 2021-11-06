//frontend
import { registerBlockType } from '@wordpress/blocks';
//import './styles/style-index.scss';
import './styles/style-index.css';
import Edit from './edit';
import save from './save';




registerBlockType('guten-plugin/employee-overview', {
	edit: Edit,
	save,
});

