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
        let currentSlug = this._assignStatusSlug(this.props.statusId);
        let lastSlug = StatusesData[StatusesData.length - 1].slug;
        let todoId = this.props.todoId;

        for (var i = 0; i < StatusesData.length; i++) {
            if (currentSlug !== lastSlug) {
                let statusId = StatusesData[i].id + 1;
                this.props.changeStatus(statusId, todoId);
            } else {
                return
            }

        }

    };

	public render() {
        let statusSlug = this._assignStatusSlug(this.props.statusId);
        let statusLabel = this._assignStatusLabel(this.props.statusId);
		return(
			<div className="status" onClick={this._toggleStatus}>
				<Tooltip position="left">{statusLabel}</Tooltip>
				<div className={statusSlug} />
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
    let currentStatusId = state.TodosData[ownProps.todoId].statusId;
    console.log(currentStatusId);
    return {
        statusId: currentStatusId
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


