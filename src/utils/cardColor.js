const CardColor = ( { finish, mouthfeel, sugars, nuts, floral, acidity, sweetness, fruits  } ) => {
  let position = 0;
  let color = '#8B6953';
  const array = [ finish, mouthfeel, sugars, nuts, sweetness, acidity, fruits, floral ];
  for(let i=0; i<array.length-1; i++) {
    if (array[i+1] > array[position]) position = i+1;
  }
  switch (position) {
    case 0: color = '#5D80A7'; break;
    case 1: color =  '#809146'; break;
    case 2: color =  '#B79078'; break;
    case 3: color =  '#8B6953'; break;
    case 4: color =  '#C87070'; break;
    case 5: color =  '#D9C40C'; break;
    case 6: color =  '#E8A438'; break;
    case 7: color =  '#D09797'; break;
    default: color =  '#8B6953';
  }
  return color;
}

export default CardColor;