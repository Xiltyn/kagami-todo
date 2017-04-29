import * as React from 'react';
import {connect} from "react-redux";
import {prototypeCategory} from "../../../../actions/todoActions";

class CategoryOption extends React.Component<any, any> {
    constructor() {
    	super();

    	this.state = {
    		isActive: false
		}
	}

	protected _passCategoryId = () => {
    	if (this.props.categoryId !== null) {
			this.props.prototypeCategory(this.props.categoryId)
		}
		this.setState({
			isActive: !this.state.isActive
		})
	};

	public render() {
		let isActive = (this.state.isActive ? 'isActive' : '')
        return(
            <div className={"blob " + isActive} onClick={this._passCategoryId}>
				{this.props.children}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
	return {
		prototypeCategory: (categoryId) => {
			dispatch(prototypeCategory(categoryId));
		}
	};
};

export default connect(null, mapDispatchToProps)(CategoryOption);