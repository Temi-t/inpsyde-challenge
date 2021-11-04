
import { registerBlockType } from '@wordpress/blocks';
import './styles/style.css';
import Edit from './edit';
import save from './save';




registerBlockType('guten-plugin/employee-overview', {
	edit: Edit,
	save,
});

