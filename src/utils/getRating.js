const conversionList = {
	3.8: 89,
	3.9: 90,
	4.0: 90,
	4.1: 91,
	4.2: 91,
	4.3: 92,
	4.4: 92,
	4.5: 93,
	4.6: 93,
	4.7: 94,
	4.8: 95,
}

const getRating = (gradeVivino) => {
	return [gradeVivino, conversionList[gradeVivino]]
}

const grade = getRating(4.6)
console.log(grade)

// export default getRating
