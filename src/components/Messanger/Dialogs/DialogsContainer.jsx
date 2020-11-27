import Dialogs from "./index";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogList: state.dialogPage.dialogs,
    };
};

const DialogsContainer = connect(mapStateToProps, {})(Dialogs);

export default DialogsContainer;