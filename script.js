//your JS code here. If required.
let student={
	name:"John",
	age:30,
	city:"New York"
}
Object.prototype.getKeys=function()
{
	let arr=[];
	for(let i in this)
		{
			arr.push(i);
		}
	return arr;
}