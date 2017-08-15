function greate20(str) {
	str = str.split(" ");
	if(str.length >= 10) {
		let theTwenty = str.filter( (a,i) => i <= 10);
		return theTwenty.join(" ");
	} else {
		return str.join(" ");
	}
}

let str = `Music video by Nacho, Yandel, Bad Bunny performing Báilame. (C) 2017 UMG Recordings, Inc. http://vevo.ly/5kQz71 `



console.log(str.length);
