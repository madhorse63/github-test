const SearchState = (props) => {
    return(
        <div className="state-wrap center">
            <div className="state">
                <img src={props.image} alt="state cover" />
                <p className="state-description">{props.description}</p>
            </div>
        </div>
    )
}

export default SearchState;