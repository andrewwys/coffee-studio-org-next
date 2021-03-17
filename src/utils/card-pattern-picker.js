const CardPatternPicker = ( category ) => {
  let patternPath = '/images/patternBG_SO.svg';
  if ( category === 'Single Origin' ) {
    return patternPath;
  } else if ( category === 'Blend' ) {
    patternPath = '/images/patternBG_Blend.svg';
    return patternPath;
  } else {
    patternPath = '/images/patternBG_Blend.svg';
    return patternPath;
  }
}

export default CardPatternPicker;