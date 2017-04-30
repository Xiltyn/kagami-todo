import * as React from 'react';
import GooFilter from "../../../global/GooFilter";
import "../../../../assets/scss/components/global/blobsAnimation";
import CategoryOption from "./CategoryOption";
import {connect} from 'react-redux';

class CategoryMenu extends React.Component<any, any> {
	constructor() {
		super();

		this.state = {
			menuIsOpened: false,
			currentHoverId: null
		}
	}

    protected _openMenu = () => {
    	this.setState({menuIsOpened: !this.state.menuIsOpened});
 	};

	protected _handleHover = (categoryId:number) => {
		this.setState({currentHoverId: categoryId})
	};

	public render() {
		const ki = require('../../../../assets/images/icons/ki.svg');
		const gi = require('../../../../assets/images/icons/gi.svg');
		const shin = require('../../../../assets/images/icons/shin.svg');

		let isOpenedClass = (!this.state.menuIsOpened ? 'isOpened' : '');
		let isShownDescription = (this.state.menuIsOpened ? {opacity: 0, visibility: 'none'} : null);
		let isShownConfirmation = (!this.state.menuIsOpened ? {opacity: 0, visibility: 'none'} : null);

		let categoryDescription = () => {
			let categoryId = this.state.currentHoverId;

			for (var i = 0; i < this.props.categories.length; i++) {
				if (categoryId == this.props.categories[i].id) {
					return (
						<div className="description" style={isShownDescription}>
							<h3>
								#{this.props.categories[i].name}
							</h3>
							<p>
								{this.props.categories[i].description}
							</p>
						</div>
					);
				}
			}
		};

		let choiceConfirmation = () => {
			let categoryId = this.state.currentHoverId;

			for (var i = 0; i < this.props.categories.length; i++) {
				if (categoryId == this.props.categories[i].id) {
					return (
						<div className="confirmation" style={isShownConfirmation}>
							<h3>
								Your choice :: #{this.props.categories[i].name}
							</h3>
							<p>
								Click next to proceed
							</p>
						</div>
					);
				}
			}
		};

		let assignCategoryImage = (imgName:string) => {
			if (imgName == "ki") {
				return ki;
			}	else if (imgName == "gi") {
				return gi;
			}	else if (imgName == "shin") {
				return shin;
			}
		};

        return(
        	<div className="categoryMenu">
				{choiceConfirmation()}
				<div className={"blobs " + isOpenedClass} onClick={this._openMenu}>
					{this.props.categories.map(
						(category, index:number) =>
							<CategoryOption
								key={index.toString()}
								categoryId={category.id}
								categoryName={category.name}
								onHover={this._handleHover}
							>
								<img src={assignCategoryImage(category.imgName)} alt={category.name}/>
							</CategoryOption>
					)}
					<GooFilter/>
				</div>
				{categoryDescription()}
			</div>
        )
    }
}

const mapStateToProps = (state) => {
	return {
		categories: state.CategoriesData
	};
};



export default connect(mapStateToProps)(CategoryMenu);