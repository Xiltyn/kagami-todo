export default class Status {
	id:number;
	slug:string;
	label:string;

	constructor(id, slug, label) {
		this.id = id;
		this.slug = slug;
		this.label = label;
	}
}