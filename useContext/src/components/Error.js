import { useContext, useEffect } from 'react';
import { CatContext } from '../App';
const Error = () => {
    const { error, resetError } = useContext(CatContext);

    useEffect(() => {
        setTimeout(() => {
            resetError();
        }, 3000);
    });

    return (
        <div className='error'>
            <h3>{error}</h3>
        </div>
    );
};

export default Error;
