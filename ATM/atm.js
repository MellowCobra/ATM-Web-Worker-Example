//self.addEventListener("message", function(e) {

//}, false);

onmessage = function(e) {
	var id = e.data.id;
	var queue = e.data.queue;

	for (var i = 0; i < queue.length; i++) {
		for (var j = 0; j < queue[i].timeout*599999999; j++) {}
		var response = {
			atm: id,
			acct: queue[i].acct,
			type: queue[i].type,
			amount: queue[i].amount
		};
		postMessage(response);
	}

	postMessage("DONE");
};
