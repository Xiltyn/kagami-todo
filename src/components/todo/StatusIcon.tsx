import * as React from 'react';
import Tooltip from "../global/Tooltip";
import {changeStatus} from "../../actions/todoActions";
import {connect} from 'react-redux';

class StatusIcon extends React.Component<any, any> {
    protected _toggleStatus = () => {
        let currentStatusId:number = this.props.statusId;
        let lastStatusId:number = 4;
        let todoId:string = this.props.todoId;
        let statusId:number = null;
        let statuses = this.props.statusesData;

        for (var i = 0; i < statuses.length; i++) {
            if (currentStatusId !== lastStatusId) {
                if (statuses[i].id === this.props.statusId) {
                    statusId = statuses[i].id + 1;
                    this.props.changeStatus(statusId, todoId);
                }
            } else {
                statusId = lastStatusId;
            }
        }
    };

	public render() {
		return(
			<div className="status" onClick={this._toggleStatus}>
				<Tooltip position="left">{this.props.currentLabel}</Tooltip>
				<div className={this.props.currentSlug} />
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
    let currentStatusId = state.TodosData[ownProps.todoId].statusId;
    let currentSlug = state.StatusesData[currentStatusId].slug;
    let currentLabel = state.StatusesData[currentStatusId].label;
    return {
        statusesData: state.StatusesData,
        statusId: currentStatusId,
        currentSlug: currentSlug,
        currentLabel: currentLabel
    }
};

const mapDispatchToProps = (dispatch) => {
	return {
		changeStatus: (statusId, todoId) => {
			dispatch(changeStatus(statusId, todoId));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(StatusIcon);


