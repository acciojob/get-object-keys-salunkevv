//your JS code here. If required.
let student={
	name:"vivek"
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