import UserCard from "./UserCard/UserCard";
import Repositiories from "./Repositiories/Repositiories";
import StateWrap from "./State/StateWrap";

const SuccessResponse = (props) => {
    return(
        <div className="user-content">
            <UserCard />
            <Repositiories />
        </div>
    )
}

export default SuccessResponse;