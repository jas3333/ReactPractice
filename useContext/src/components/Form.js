import { useContext } from 'react';
import { CatContext } from '../App';

const Form = () => {
    const { onSubmit, setCatAge, setCatName, catName, catAge } = useContext(CatContext);
    return (
        <div className='container-col auto border pad-lg mg-top-lg '>
            <form className='container-col pad-lg width-md align-center' onSubmit={onSubmit}>
                <div className='container-row align-center '>
                    <label htmlFor='cat-name' className='width-xsm left '>
                        Name:
                    </label>
                    <input
                        type='text'
                        name='cat-name'
                        value={catName}
                        onChange={(event) => setCatName(event.target.value)}
                    />
                </div>
                <div className='container-row align-center mg-top-sm'>
                    <label htmlFor='age' className='width-xsm left '>
                        Age:{' '}
                    </label>
                    <input
                        type='number'
                        name='age'
                        value={catAge}
                        onChange={(event) => setCatAge(event.target.value)}
                    />
                </div>
                <button type='submit' className='btn auto mg-top-sm'>
                    Add Cat
                </button>
            </form>
        </div>
    );
};

export default Form;
