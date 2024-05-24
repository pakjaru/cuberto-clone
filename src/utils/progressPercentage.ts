export const progressPercentage = ({
	value,
	maxValue,
	minValue,
	minPercentage,
	maxPercentage,
}: {
	value: number
	maxValue: number
	minValue?: number
	minPercentage?: number
	maxPercentage?: number
}): number => {
	const _minValue = minValue || 0
	const _minPercentage = minPercentage || 0
	const _maxPercentage = maxPercentage || 100

	return ((value - _minValue) * (_maxPercentage - _minPercentage)) / (maxValue - _minValue) + _minPercentage
}
