import search from '../../images/search.svg';

const SearchInput = (props) => {
    return(
        <div className="search">
            <img src={search} alt="search" />
            <input type="text" placeholder="Enter GitHub username" />
        </div>
    )
}

export default SearchInput