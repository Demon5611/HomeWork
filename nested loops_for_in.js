
let arr=[
  {
    'original name': 'Fight club',
    'russian name': 'Бойцовский клуб',
    'year': 1999,
    'actors': [
        'Edvard Norton',
        'Bred Pit',
        'Helena Karter'
    ]
  },
  {
    'original name': 'Cars good',
    'russian name': 'Крутые тачки',
    'year': 2021,
    'actors': [
        'Nusha KUKU',
        'Ivan D',
        'Karter'
    ]
  }, 
  {
    'original name': 'Titanik',
    'russian name': ' Титаник',
    'year': 2021,
    'actors': [
        'Mary Crismas',
        'Cruse',
        'Karter'
    ]
  } 
]
//  i - это индекс, который идет по всему массиву arr. Берем первый обьект,  в j помещаем свойство ('actors'), внутри actors есть массив. 
// Для него создаем переменную k и в нее выводим свойство массива actors т.е. имена актеров

for (i=0; i<arr.length; i++){
    console.log('============= Фильм №' + (i+1) + '============')
    for (let j in arr[i]){
        if (j=='actors'){
            for(let k=0; k<arr[i][j].length; k++){
                console.log('Актер' +(k+1) + ': ' +arr[i][j][k])
                // выведем остальные свойства 
            }
        } else if (j=='original name'){
          console.log('Оригинальное название'+ ': ' +arr[i][j])
        } else if (j=='russian name'){
          console.log('Русское название' + ': ' +arr[i][j])
        } else if (j=='year'){
          console.log('Год выхода на экран' + ': ' +arr[i][j])
        }
  }
}