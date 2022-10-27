function loadRepos() {
  let request = new XMLHttpRequest();
  request.open('GET', 'https://api.github.com/users/testnakov/repos');
  request.send();

  request.addEventListener('load', (onreadystatechange) =>{

  })
}