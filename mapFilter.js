var arr = [1, 2, 3, 4];
arr = arr.map((item, index) => (item = item * 2));

console.log(arr);

var arr2 = [
  {
    name: "Surbhi",
    age: 20,
  },
  {
    name: "Nandini",
    age: 20,
  },
  {
    name: "Shiva",
    age: 22,
  },
];

arr2 = arr2.filter((item) => {
  return item.age != 22;
});

console.log(arr2);
