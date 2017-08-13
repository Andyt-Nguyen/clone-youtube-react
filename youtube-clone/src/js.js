let nums = "1231231262";

function convert(str) {
	if(str.length === 3) {
		return str;
	} else if (str.length == 4) {
		str = str.substr(0,1);
		return str + "K";
	} else if(str.length == 5) {
		str = str.substr(0,2);
		return str + "K";
	} else if(str.length == 6) {
		str = str.substr(0,3);
		return str + "K"
	} else if(str.length == 7) {
		str = str.substr(0,1);
		return str + "M"
	} else if(str.length == 8) {
		str = str.substr(0,2);
		return str + "M";
	} else if(str.length == 9) {
		str = str.substr(0,3);
		return str + "M";
	} else {
		str = str.substr(0,1);
		return str + "B";
	}
}

console.log(convert(nums));


var theDate = new Date("2017-08-02T17:30:01.000Z");
var convertedDate = theDate.toDateString();

function convertDate(str) {
	str = str.split(" ");
	str.shift();
	return str.join(" ");
}

console.log(convertDate(convertedDate));

let stringer = "Hell";
let boo = Boolean(stringer.length === 4);
console.log(boo);
