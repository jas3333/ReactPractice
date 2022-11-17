import { useContext } from 'react';
import { CatContext } from '../App';
import { FaTrash } from 'react-icons/fa';

const ListItem = ({ id, name, age }) => {
    const { removeCat } = useContext(CatContext);

    return (
        <div className='container-row space-between align-center'>
            <div className='container-row mg-top-sm '>
                <FaTrash className='mg-right-md' onClick={() => removeCat(id)} />
                <h4>{name}</h4>
            </div>
            <h4>{age}</h4>
        </div>
    );
};
export default ListItem;
