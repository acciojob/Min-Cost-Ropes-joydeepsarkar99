function mincost(arr){ 
	let cost = 0
	while(arr.length > 1){
		arr.sort(function(a,b){return a - b})
		let merge = arr.shift() + arr.shift()
		arr.unshift(merge)
		cost += merge
	}
	return cost
}

module.exports=mincost;
