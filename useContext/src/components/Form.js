import { useContext } from 'react';
import { CatContext } from '../App';

const Form = () => {
    const { onSubmit, setCatAge, setCatName, catName, catAge } = useContext(CatContext);
    return (
        <div className='container-col width-lg auto border pad-lg mg-top-lg '>
            <form className='container-col auto pad-lg ' onSubmit={onSubmit}>
                <div className='container-row align-center'>
                    <label htmlFor='cat-name' className='width-xsm'>
                        Name:
                    </label>
                    <input
                        type='text'
                        name='cat-name'
                        value={catName}
                        onChange={(event) => setCatName(event.target.value)}
                    />
                </div>
                <div className='container-row align-center'>
                    <label htmlFor='age' className='width-xsm'>
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
