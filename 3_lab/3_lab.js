const INF = Infinity;
const readline = require('readline');

/////////Initialize console in\output////////////////

const textStream = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


//////////////NodeJs console query//////////////////
textStream.question(`Input N and M: `, (input) => {
	numberOfNodes = input.split(" ")[0];
	m = input.split(" ")[1];
	let userNodes = [];
	let counter = 0;
	let graph = [];

	for (let i = 0; i <= numberOfNodes; i++) {
		graph[i] = [];
	}

	textStream.on('line', (input) => {
		if (counter == 0) {
			userNodes = input.split(" ").map((value) => { return value - 1 });
			counter++;
		} else {
			input = input.split(" ");
			let from = parseInt(input[0]) - 1;
			let to = parseInt(input[1]) - 1;
			let weight = parseInt(input[2]);

			graph[from].push({ to: to, weight: weight });
			graph[to].push({ to: from, weight: weight });
			counter++;


			if (counter > m) {
				textStream.close();
				main(numberOfNodes, graph, userNodes);
			}
		}
	});
})

////////////Main function//////////////////
function main(numberOfNodes, graph, userNodes) {

	let startNode = 0; // start Node
	let maxPing = INF;
	let bestNode = -1;

	// Check all Nodes and search best routes
	for (let i = 0; i < numberOfNodes; i++) {

		//If this node is not user, than start algo
		if (!userNodes.includes(startNode)) {

			let distanceArray = [];

			//Initialize array of Infinity  values
			for (let iterator = 0; iterator < numberOfNodes; ++iterator) {
				distanceArray[iterator] = INF;
			}

			distanceArray[startNode] = 0;
			let visitedNodes = [];

			for (let iterator = 0; iterator < numberOfNodes; ++iterator) {

				let currentNode = -1;

				for (let j = 0; j < numberOfNodes; ++j) {
					if (!visitedNodes[j] && (currentNode == -1 || distanceArray[j] < distanceArray[currentNode]))
						currentNode = j;
				}

				if (distanceArray[currentNode] == INF) {
					break;
				}

				visitedNodes[currentNode] = true;

				for (let j = 0; j < graph[currentNode].length; ++j) {
					let to = graph[currentNode][j].to,
						len = graph[currentNode][j].weight;
					if (distanceArray[currentNode] + len < distanceArray[to]) {
						distanceArray[to] = distanceArray[currentNode] + len;
					}
				}
			}



			let withoutRouters = distanceArray.map(function (value, index) {
				if (userNodes.includes(index)) {
					return value;
				} else {
					return -1;
				}
			});

			let maxPingInIteration = Math.max(...withoutRouters);
			console.log("Current Node: " + (startNode + 1));


			if (maxPing > maxPingInIteration) {
				maxPing = maxPingInIteration;
				bestNode = startNode;
				console.log("Best Node: " + (startNode + 1));
			}
		}

		startNode++;

	}


	console.log('!!!!!!!!!!!!!!!! Answer !!!!!!!!!!!!!!!!!!!');
	console.log('Final Best Node: ' + (bestNode + 1));
	console.log('Max Ping: ' + maxPing);


}
