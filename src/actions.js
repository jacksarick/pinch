// Parse data from localStorage
function local_storage() {
	return JSON.parse(localStorage.db);
}

function fuzzy_search(search) {
	console.log(search);
}

function filter() {
	// Pull all filters into array and get the values of checked ones
	filters = [...document.getElementsByClassName("filter")].filter(x => x.checked).map(x => x.value);

	// Pull all items
	items = [...document.getElementsByClassName("entry")]
	
	for (var i = items.length - 1; i >= 0; i--) {
		// default to hidden
		items[i].style.display = "none";
		
		if (filters.includes(items[i].id)) {
			items[i].style.display = "table-row";
		}
	}
}

// Read-modify-write data
function update(key, value){
	var data = local_storage();
	data[key] = value;
	localStorage.db = JSON.stringify(data);
}

// Read-modify-write data
function remove(key){
	var data = local_storage();
	delete data[key];
	localStorage.db = JSON.stringify(data);
}

// Short hand for update() with data from DOM
function new_record(){
	update($("#new-name").value(), [document.querySelector('input[name=new-type]:checked').value, $("#new-value").value()]);
}

// Format data as table row
function format(name, type, value) {
	return `<tr class="entry" id="${type}" value="${name}">
				<td>${name}</td>
				<td>${type}</td>
				<td>
					$<input type="number" value="${value}" onchange="update('${name}', ['${type}', this.value]); redraw();">
					<button onclick="remove('${name}'); redraw();">Remove</button>
				</td>
			</tr>`
}