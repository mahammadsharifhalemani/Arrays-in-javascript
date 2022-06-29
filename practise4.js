//array using Map()method
const heros = [{name: 'Spider-Man'}, {name: 'Thor'}, {name: 'Black Panther'}, {name: 'Captain America'}];
const myArr = heros.map(( hero,index)=>{
    return {id: index, hero:hero.name}
});
console.log(myArr)