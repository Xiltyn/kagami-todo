import * as React from 'react';
import Tooltip from "../global/Tooltip";
import {changeStatus} from "../../actions/todoActions";
import {connect} from 'react-redux';
import {StatusesData} from "../../dataInitializer";


class StatusIcon extends React.Component<any, any> {
	constructor() {
		super();

		this.state = {
			slug: 'todo',
			label: 'To Do'
		}
	};

    protected _assignStatusSlug = (statusId:number) => {
        let result = null;

        for (let i = 0; i < StatusesData.length; i++) {
            if (StatusesData[i].id == statusId) {
                result = StatusesData[i].slug;
            }
        }
        return result
    };

    protected _assignStatusLabel = (statusId:number) => {
        let result = null;

        for (let i = 0; i < StatusesData.length; i++) {
            if (StatusesData[i].id == statusId) {
                result = StatusesData[i].label;
            }
        }

        return result
    };

    protected _toggleStatus = () => {
        let currentStatusId:number = this.props.statusId;
        let lastStatusId:number = 4;
        let todoId:string = this.props.todoId;
        let statusId:number = null;

        for (var i = 0; i < StatusesData.length; i++) {
            if (currentStatusId !== lastStatusId) {
                if (StatusesData[i].id === this.props.statusId) {
                    statusId = StatusesData[i].id + 1;
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


