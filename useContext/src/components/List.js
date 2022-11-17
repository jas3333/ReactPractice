import { useContext } from 'react';
import { CatContext } from '../App';
import ListItem from './ListItem';
const List = () => {
    const { cat } = useContext(CatContext);
    return (
        <div className='container-col width-lg border pad-lg auto mg-top-lg'>
            <div className='container-row space-between'>
                <h2>Name:</h2>
                <h2>Age: </h2>
            </div>
            {cat.map((kitty) => {
                return <ListItem key={kitty.id} {...kitty} />;
            })}
        </div>
    );
};
export default List;
