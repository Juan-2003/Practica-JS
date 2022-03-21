const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if(res.status != "200"){
            console.log(res);
            pokeImage("img/pokemon-sad.gif");
        }
        else{
            return res.json();
        }
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        let nombre = data.forms[0].name;
        let tipo = data.types[0].type.name;
        let hp = data.stats[0].base_stat;
        let attack = data.stats[1].base_stat;
        let defense = data.stats[2].base_stat;
        let special_attack = data.stats[3].base_stat;
        let special_defense = data.stats[4]. base_stat;
        let speed = data.stats[5].base_stat;
        let movimientos = data.moves[0].move.name;

        console.log(pokeImg);
        pokeImage(pokeImg);

        console.log(nombre);
        NOMBRE(nombre)

        console.log(tipo);
        tipoPoke(tipo);

        console.log(hp);
        cantHp(hp);

        console.log(attack);
        cantAttack(attack);

        console.log(defense);
        cantDefense(defense);

        console.log(special_attack);
        cantSpecialAttack(special_attack);

        console.log(special_defense);
        cantSpecialDefense(special_defense);

        console.log(speed);
        cantSpeed(speed);

        console.log(movimientos);
        cantMovimientos(movimientos);
    })
    

}

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

const NOMBRE = (value) => {
    const NOMBRE = document.getElementById("nombre");
    NOMBRE.value = value;
}
const tipoPoke = (value) => {
    const tipo = document.getElementById("tipo");
    tipo.value = value;
}

const cantHp = (value) => {
    const hp = document.getElementById("hp");
    hp.value = value;
}

const cantAttack = (value) => {
    const attack = document.getElementById("attack");
    attack.value = value;
}

const cantDefense = (value) => {
    const defense = document.getElementById("defense");
    defense.value = value;
}

const cantSpecialAttack = (value) => {
    const special_attack = document.getElementById("special_attack");
    special_attack.value = value;
}

const cantSpecialDefense = (value) => {
    const special_defense = document.getElementById("special_defense");
    special_defense.value = value;
}

const cantSpeed = (value) => {
    const speed = document.getElementById("speed");
    speed.value = value;
}

const cantMovimientos = (value) => {
    const movimientos = document.getElementById("movimientos");
    movimientos.value = value;
}







//pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png")

