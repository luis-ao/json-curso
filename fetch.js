
let postsElements = '';

fetch('http://jsonplaceholder.typicode.com/posts')
.then(response => {
    return response.json()
})
.then(data => {
    for(let i=0; i < data.lenght; i++){
        postsElements += `<li>${data[i].userId} - ${data[i].title}</li>`
    }
    console.log(postsElements)
    document.getElementById('posts').innerHTML = postsElements
})

