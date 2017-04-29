import * as React from 'react';
import GooFilter from "../../../global/GooFilter";
import "../../../../assets/scss/components/global/blobsAnimation";
import CategoryOption from "./CategoryOption";

export default class CategoryMenu extends React.Component<any, any> {
	constructor() {
		super();

		this.state = {
			menuIsOpened: false
		}
	}

    protected _openMenu = () => {
    	this.setState({menuIsOpened: !this.state.menuIsOpened});
 	};

	public render() {
		const ki = require('../../../../assets/images/icons/ki.svg');
		const gi = require('../../../../assets/images/icons/gi.svg');
		const shin = require('../../../../assets/images/icons/shin.svg');

		let isOpened = (this.state.menuIsOpened ? 'isOpened' : '');

        return(
            <div className={"blobs " + isOpened} onClick={this._openMenu}>
                <CategoryOption categoryId={1}>
					<img src={ki} alt=""/>
				</CategoryOption>
                <CategoryOption categoryId={2}>
					<img src={gi} alt=""/>
				</CategoryOption>
                <CategoryOption categoryId={3}>
					<img src={shin} alt=""/>
				</CategoryOption>
				<CategoryOption categoryId={null}/>
                <GooFilter/>
            </div>
        )
    }
}