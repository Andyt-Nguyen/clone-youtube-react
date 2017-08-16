
export function convertViews(str) {
	if(str.length === 3) {
		return str;
	} else if (str.length === 4) {
		str = str.substr(0,1);
		return str + "K";
	} else if(str.length === 5) {
		str = str.substr(0,2);
		return str + "K";
	} else if(str.length === 6) {
		str = str.substr(0,3);
		return str + "K"
	} else if(str.length === 7) {
		str = str.substr(0,1);
		return str + "M"
	} else if(str.length === 8) {
		str = str.substr(0,2);
		return str + "M";
	} else if(str.length === 9) {
		str = str.substr(0,3);
		return str + "M";
	} else if(str.length === 10) {
		str = str.substr(0,1);
		return str + "B";
	} else if(str.length === 11) {
		str = str.substr(0,2);
		return str + "B";
	} else {
		str = str.substr(0,3);
		return str + "B";
	}
}

 export function convertDate(str) {
	 let date = new Date(str);
	 let newDate = date.toDateString();
		newDate = newDate.split(" ");
		newDate.shift();
		return newDate.join(" ");
}

export function limitDescription(str, num) {
		str = str.split("");
		if(str.length >= num) {
			let theTwenty = str.filter( (a,i) => i <= num);
			return theTwenty.join("")+"...";
		} else {
			return str.join("");
		}
	}

//original number = 112
