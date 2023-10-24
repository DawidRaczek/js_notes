const x = [1, 2, 3, 4];

// spread operator -> rozprasza tablice lub obiekt

// ...x => 1, 2, 3, 4 => nie będzie działać, bo brakuje nawiasów
// [...x] => [1,2,3,4] (shallow copy)
// [...x, ...x] => [1,2,3,4,1,2,3,4]
// [x,x] => [[1,2,3,4], [1,2,3,4]]