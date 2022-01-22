import './Header.scss';
import mobileLogo from '../../assets/images/mobile/Logo2.png';
import desktopLogo from '../../assets/images/desktop/Logo2.png';
import { Search } from '../search/Search';
import { useAppDispatch } from '../../store/store';
import { openFilterModal } from '../../store/movies/movies.slice';

export const Header = () => {
    const dispatch = useAppDispatch();
    const handleFilterClick = () => {
        dispatch(openFilterModal());
    }

    return (
    <header>
        <img src={mobileLogo} className='Mobile-Logo' alt='Mobile Logo'/>
        <img src={desktopLogo} className='Desktop-Logo' alt='Desktop Logo'/>
        <div className='Search-Options'>
            <Search />
            <button className='Filter-Button' onClick={handleFilterClick}>Filter Movies</button>
        </div>
    </header>
    );
};
