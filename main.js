let input = [
    { name: "John", age: 21, city: "New York" },
    { name: "Mike", age: 28, city: "Moscow" },
    { name: "Danny", age: 30, city: "London" },
    { name: "Lisa", age: 26, city: "Paris" },
    { name: "Sophie", age: 19, city: "Berlin" },
    ];
const names = input.map(person => person.name);
console.log(names);

let numbers = [1,2,3];
const filteredNumbers = numbers.filter((num) => {
    return num == 3;
});
console.log(filteredNumbers);