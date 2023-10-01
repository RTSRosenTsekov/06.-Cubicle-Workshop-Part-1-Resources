const uniqid = require("uniqid");
const cubes = [
    {
        id: 'kbyxdpcln7c7n7e',
        name: 'pepi',
        description: 'asd',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp3qrzOft1bpbwNn84yLrxrr6pLLtrwY4NzQ&usqp=CAU',
        difficultyLevel: 1
      },
      {
        id: 'kbyxdpcln7c86jj',
        name: 'Gosho',
        description: 'dsa',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp3qrzOft1bpbwNn84yLrxrr6pLLtrwY4NzQ&usqp=CAU',
        difficultyLevel: 5
      },
];

exports.getAll = () => {
  return [...cubes];
};

exports.create = (cubeData) => {
  const id = uniqid();
  console.log({ id });

  const newCube = {
    id,
    ...cubeData,
  };

  cubes.push(newCube);

  return newCube;
};
