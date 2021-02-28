const flavorFormatter = ( flavorArray ) => {  
   //break flavors array into one line
  return flavorArray.reduce((str, flavor, i)=>{
    if (i < flavorArray.length -1) {
      return (str + flavor + ' - ')
    } else return str + flavor
  }, '');
}

export default flavorFormatter;