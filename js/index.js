function Search() {
    let name = document.getElementById('name').value;
    const url = `https://api.github.com/users/${name}`;
    fetch(url, {
        method: 'get'
    }).then(async function(response) {
        let datas = await response.json();
        document.getElementById('login').innerHTML = datas.login;
        document.getElementById('Photo').src = datas.avatar_url;
        document.getElementById('followers').innerHTML = datas.followers ? `Seguidores ${datas.followers.toString()}` : '';
        document.getElementById('following').innerHTML = datas.following ? `Seguidores ${datas.following.toString()}` : '';
        document.getElementById('email').innerHTML = datas.email ? `Email ${datas.email}` : '';
        document.getElementById('bio').innerHTML = datas.bio ? `Bio ${datas.bio}` : '';
//        SearchRepository();
    });
}
function SearchRepository(name) {
    const url = `https://api.github.com/users/${name}/repos`;
    fetch(url, {
        method: 'get'
    }).then(async function(response) {
        let datas = await response.json();
        datas.map(value => {
            let tr = document.createElement("tr");
            let td = tr.document.appendChild("td");
            td.innerHTML = value.name;
            document.getElementById('repositories').appendChild(tr);
        })
    })
}