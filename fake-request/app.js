// This is a fake request function 
// It accepts a URL and then either resolves or rejects the promise after a minute  Http Request Function

const fakeRequest = (url) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const pages = {
				'/users' : [
					{ id: 1, username: 'Bilbo' },
					{ id: 5, username: 'Esmerelda' }
				],
				'/about' : 'This is the about page!'
			};
			const data = pages[url];
			if (data) {
				resolve({ status: 200, data });
			}
			else {
				reject({ status: 404 });
			}
		}, 1000);
	});
};

fakeRequest('/users')
	.then((res) => {
		console.log('Status Code', res.status);
		console.log('Data', res.data);
		console.log('REQUEST WORKED!');
	})
	.catch((res) => {
		console.log(res.status);
		console.log('REQUEST FAILED');
	});

fakeRequest('/dogs')
	.then((res) => {
		console.log('Status Code', res.status);
		console.log('Data', res.data);
		console.log('REQUEST WORKED!');
	})
	.catch((res) => {
		console.log(res.status);
		console.log('REQUEST FAILED');
	});