export function prototypeCategory(categoryId:number) {
	return {
		type: "PROTOTYPE_CHANGE_CATEGORY",
		categoryId: categoryId,
		currentStep: 1
	}
}

export function prototypeNextStep(currentStep:number) {
	let nextStep = currentStep + 1;

	return {
		type: "PROTOTYPE_NEXT_STEP",
		nextStep: nextStep
	}

}