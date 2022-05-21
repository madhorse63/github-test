import logo from '../../images/logo.svg';

import SearchInput from './SearchInput';

const Header = (props) => {
    return(
        <header className="wrapper">
            <img src={logo} alt="logo" className='logo' />
            <SearchInput />
        </header>
    )
}

export default Header;