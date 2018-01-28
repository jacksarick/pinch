function fuzzy_search(argument) {
	console.log(argument);
}

function filter(argument){
	console.log(argument);
}

function update(key, value){
	console.log({key: value});
}

function new_record(){
	update($("#new-name").value(), [$("#new-type").value(), $("#new-value").value()])
}

function format(name, type, value) {
	return `<tr id='${type}'>
				<td>${name}</td>
				<td>${type}</td>
				<td>
					<input type='number' value='${value}' onchange='update(${name}, [${type}, ${value}]);'>
					<button onclick='remove(${name});'>Remove</button>
				</td>
			</tr>`
}