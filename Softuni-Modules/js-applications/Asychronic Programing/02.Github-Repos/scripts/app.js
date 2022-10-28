async function loadRepos() {
	const username = document.getElementById('username').value;
	let url = `https://api.github.com/users/${username}/repos`;
	let response = await fetch(url);
	

	if(!response.ok){
		throw new Error('Error')
		console.log('Request has error!');
	}
	let data = await response.json(); 

	const list = document.getElementById('repos');

	for(let repo of data){
		const li = document.createElement('li');
		const a = document.createElement('a')
		a.href = repo.html_url;
		a.textContent = repo.full_name;
		li.appendChild(a);
		list.appendChild(li);

		return li; 
	}

	list.replaceChildren(...items)

}