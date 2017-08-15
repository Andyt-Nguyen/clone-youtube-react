function nine(cats) {
	let theNine = cats.filter((a,i) => i < 9);
	return theNine;
}

let obj = [
	{
		title: "bobo1",
		category:"jimbofdf"
	},
	{
		title: "bobol2",
		category:"jimbodf"
	},{
		title: "boboas3",
		category:"jimbosa"
	},{
		title: "boboad4",
		category:"jimboga"
	},{
		title: "bobofdfd5",
		category:"jimboera"
	},{
		title: "bobozxc6",
		category:"jimbos"
	},{
		title: "bobo327",
		category:"jimbofdf"
	},{
		title: "boboqwer8",
		category:"jimbo f"
	},{
		title: "bobolk9",
		category:"jimboasdfklaj"
	},{
		title: "boboqwe10",
		category:"jimbolksdjf"
	},
	{
		title: "boboqwe343",
		category:"jimbolksdjf"
	},
	{
		title: "boboqwe23",
		category:"jimbolksdjf"
	},
	{
		title: "boboqwe5555",
		category:"jimbolksdjf"
	},
];

let theBigNine = nine(obj);
let transformedNine = theBigNine.map( a => a.title + " YOy YOYYYYY");

let secondObj = {
	title: {
		secondTitle: " EHy"
	}
}

let { secondTitle } = secondObj.title;

console.log(secondTitle);
