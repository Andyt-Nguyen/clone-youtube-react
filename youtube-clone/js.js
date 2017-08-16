function nine(cats) {
	let theNine = cats.filter((a,i) => i < 9);
	return theNine;
}

let obj = {
	title1: {
		realTitle: "Yoy YOYYY"
	},
	title2: {
		realTitle: "Title2"
	},
	title3: {
		realTitle: "Title3"
	}
};

obj.title4 = {realTitle:"Title4"};
obj.title4.arr = {name: "Jimmy", lastName:"Volmer"};
let fullName = obj.title4.arr.map(a => a);
console.log(fullName);
