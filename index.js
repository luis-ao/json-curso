const user = {
    name: 'Luis',
    lastname : 'roberto',
    age: 20,
    adress: {
        street : '123 Main',
        city: 'tecamac',
    },
    married: false,
}

const friends = [
    { name: 'Luis', nickname:'wicho' },
    { name: 'Raul', nickname:'Ruls' },
    { name: 'Daniel', nickname:'Dany' },
    { name: 'Jesus', nickname:'Chuy' },
    { name: 'Jose', nickname:'Josh' },
]

// le agregamos la propiedad amigos al objeto user
user.friends = friends;

/* Convertir a JSON */
console.log (user);
console.log (JSON.stringify(user));

let output = '';
for (let i = 0; i < friends.length; i++){
    output = output + `<li>${friends[i].name} - ${friends[i].nickname}<li/>`
}

document.getElementById('people').innerHTML=output;
