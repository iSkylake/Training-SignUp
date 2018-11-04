const taskList = [
	{
		id: '56337',
		name: 'PIT',
		icon: 'truck-loading',
		description: 'Operate forklift (RC) to unload trailers and downstack pallets',
		check: false,
		value: 'pit'
	},
	{
		id: '29532',
		name: 'TDR',
		icon: 'dungeon',
		description: 'Verify and maintain trailer safety before and after opening a dock',
		check: false,
		value: 'tdr'
	},
	{
		id: '45601',
		name: 'Problem Solve',
		icon: 'box-open',
		description: 'Fix damaged packages and verify if the item is in the correct pacakge.',
		check: false,
		value: 'problemSolve'
	},
	{
		id: '95821',
		name: 'Waterspider',
		icon: 'spider',
		description: 'Wrap ready-to-go pallets and stage them to the outbound area.',
		check: false,
		value: 'waterSpider'
	}
];

const scheduleList = [
	{
		id: '53279',
		day: 'Sunday'
	},
	{
		id: '93456',
		day: 'Monday'
	},
	{
		id: '90076',
		day: 'Tuesday'
	},
	{
		id: '20031',
		day: 'Wednesday'
	},
	{
		id: '53124',
		day: 'Thursday'
	},
	{
		id: '77146',
		day: 'Friday'
	},
	{
		id: '14268',
		day: 'Saturday'
	}
];

const shiftList = [
	{
		id: '67425',
		shift: 'Morning',
		time: '04:00 - 08:00'
	},
	{
		id: '85257',
		shift: 'Day',
		time: '09:30 - 13:30'
	},
	{
		id: '34212',
		shift: 'Twi',
		time: '15:00 - 19:00'
	},
	{
		id: '55455',
		shift: 'Nite',
		time: '20:30 - 00:30'
	}
]

export {taskList, scheduleList, shiftList};