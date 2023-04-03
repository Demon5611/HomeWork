const obj = [
    {
        id: 2,
        name: "Ruslaan",
        lastName: "Gavrilov",
        age: 46,
        isWork: true,
    },
    {
        id: 1,
        name: "Oleg",
        lastName: "Gavrilov",
        age: 29,
        isWork: true,
    },
    {
        id: 3,
        name: "Marina",
        lastName: "Osipova",
        age: 30,
        isWork: true,
    },
];
const a = {};
a.firstname = 'andrey"
a.secondname = "Ivanov";
a.firstnam = "Dima";
delete a.firstnam;
console.log(a);

// const user = {
//     name: 'Pumpkin',
//     age: 22,
//     profession: 'Pomidor',
//     salary: 10000,

// }
// let entries = Object.entries(obj)
// entries.map((index) => console.log(index[index]))

// for (let key in obj)
// {
//     console.log(key, obj[key])
// }

// const user = {
//     name: 'Иван Пeтров',
//     email: 'petrov@mail.com',
//     age: 25,
//     date: '08/02/1989',
//     active: true
//   };

const animals = {
    tiger: 1,
    cat: 2,
    monkey: 3,
    elephant: 4,
};

const entries = Object.entries(animals);
console.log(entries);

for (let [key, values] of Object.entries(animals))
{
    console.log(key, values);
}
