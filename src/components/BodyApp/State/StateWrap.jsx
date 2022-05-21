import SearchState from "./SearchState";

import search from '../../../images/search.svg';
import user from '../../../images/user.svg';
import union from '../../../images/union.svg';

/* добавил этот компонент, чтобы не выносить логику отрисовки наружу */

const StateWrap = (props) => {
    const responseDescriptions = [
        "Start with searching a GitHub user",
        "User not found",
        "Repository list is empty"
    ];
    const responseImages = [
        search,
        user,
        union
    ]

    return(
        <div className="body-app wrapper">
            <SearchState image={responseImages[0]} description={responseDescriptions[0]} />
        </div>
    )
}

export default StateWrap;