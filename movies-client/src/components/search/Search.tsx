import { useState } from 'react';
import { setFilterOptions } from '../../store/movies/movies.slice';
import { useAppDispatch } from '../../store/store';
import './Search.scss';

export const Search = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useAppDispatch();

    const handleInputValueChange = (value: string) => {
        setInputValue(value);
        dispatch(setFilterOptions({
            searchTerm: value
        }));
    };

    return (
        <div className='Search'>
            <input type='text' placeholder='Search movies...' value={inputValue} onChange={evt => handleInputValueChange(evt.target.value)}/>
        </div>
    );
};
