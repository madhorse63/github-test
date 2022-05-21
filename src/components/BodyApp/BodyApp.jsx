import StateWrap from '../BodyApp/State/StateWrap';
import SuccessResponse from './SuccessResponse';

const BodyApp = (props) => {
    return(
        <div className="wrapper">
            <div className="center">
                <SuccessResponse />
                {/* <StateWrap /> */}
            </div>
        </div>
    )
}

export default BodyApp;