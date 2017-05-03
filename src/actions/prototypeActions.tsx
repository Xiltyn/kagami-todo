export function prototypeNextStep(currentStep:number) {
	let nextStep = currentStep + 1;

	return {
		type: "PROTOTYPE_NEXT_STEP",
		nextStep: nextStep
	}

}

export function prototypeCategory(categoryId:number) {
	return {
		type: "PROTOTYPE_CATEGORY",
		categoryId: categoryId,
		currentStep: 1
	}
}

export function prototypeContent(content:string) {

	return {
		type: "PROTOTYPE_CONTENT",
		content: content
	}

}

export function prototypeTime(currentTime:string) {

	return {
		type: "PROTOTYPE_TIME",
		time: currentTime
	}

}