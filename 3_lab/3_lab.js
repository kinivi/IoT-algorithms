const INF = Infinity;
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


rl.question(`Input N and M: `, (input) => {
	n = input.split(" ")[0];
	m = input.split(" ")[1];
	let userNodes = [];
	let counter = 0;
	let g = [];

	for (let i = 0; i <= n; i++) {
		g[i] = [];
	}

	rl.on('line', (input) => {
		if (counter == 0) {
			userNodes = input.split(" ").map((value) => {return value-1});
			counter++;
		} else {
			input = input.split(" ");
			let from = parseInt(input[0]) - 1;
			console.log(from);
			let to = parseInt(input[1]) - 1;
			let weight = parseInt(input[2]);

			g[from].push({ first: to, second: weight });
			g[to].push({ first: from, second: weight });
			counter++;


			if (counter > m) {
				rl.close;
				console.log(n, m, g);
				console.log(' ');
				main(n, m, g, userNodes);
			}
		}
	});
	//6 rl.close()
})

//Main function
function main(n, m, g, userNodes) {

	let s = 0; // стартова вершина
	let maxPing = INF;
	let bestNode = -1;

	for (let i = 0; i < n; i++) {

		let d = [], p = [];
		for (let i = 0; i < n; i++) {
			d[i] = INF;
		}

		d[s] = 0;
		let u = [];
		for (let i = 0; i < n; ++i) {
			let v = -1;
			for (let j = 0; j < n; ++j)
				if (!u[j] && (v == -1 || d[j] < d[v]))
					v = j;
			if (d[v] == INF)
				break;
			u[v] = true;

			for (let j = 0; j < g[v].length; ++j) {
				let to = g[v][j].first,
					len = g[v][j].second;
				if (d[v] + len < d[to]) {
					d[to] = d[v] + len;
					p[to] = v;
				}
			}
		}


		let withoutRouters = d.map(function(value, index) {
			if(userNodes.includes(index)) {
				return value;
			} else {
				return -1;
			}
		});
		
		let maxPingInIteration = Math.max(...withoutRouters);
		console.log("Current Node: " + (s+1));


		if (maxPing > maxPingInIteration && !userNodes.includes(s)) {
			maxPing = maxPingInIteration;
			bestNode = s;
			console.log("Best Node: " + (s+1));
		}

		s++;

	}



	console.log('Final Best Node: ' + (bestNode + 1));
	console.log('Max Ping: ' + maxPing);


}
