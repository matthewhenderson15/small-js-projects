// Finalized code from Udemy course - using Star Wars API

// Using Axios - improves on error codes in fetch


// Using fetch and chaining promises - refactored to simplify response logic
const checkStatus = (res) => {
    if (!res.ok)
		throw new Error(`Status Code Error: ${res.status}`);
    return res.json();
}

fetch('https://swapi.dev/api/planets/')
	.then(checkStatus)
    .then((data) => {
	    const filmURL = data.results[0].films[0];
        return fetch(filmURL);
	})
    .then(checkStatus)
    .then((data) => {
        console.log(data.title);
    })
	.catch((err) => {
		console.log('SOMETHING WENT WRONG WITH FETCH!');
		console.log(err);
	});

// Using XHR requests - clunky and requires more nesting
const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function() {
	console.log('FIRST REQUEST WORKED!!!');
	const data = JSON.parse(this.responseText);
	const filmURL = data.results[0].films[0];
	const filmReq = new XMLHttpRequest();
	filmReq.addEventListener('load', function() {
		console.log('SECOND REQUEST WORKED!!!');
		const filmData = JSON.parse(this.responseText);
		console.log(filmData.title);
	});
	filmReq.addEventListener('error', function(e) {
		console.log('ERROR!!', e);
	});
	filmReq.open('GET', filmURL);
	filmReq.send();
});
firstReq.addEventListener('error', (e) => {
	console.log('ERROR!!!!!!');
});
firstReq.open('GET', 'https://swapi.dev/api/planets/', true);
firstReq.send();
console.log('Request Sent!');