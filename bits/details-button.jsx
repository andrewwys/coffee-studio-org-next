const DetailButton = ({ color, width }) => {
  return (
    <svg width={width} height={width} viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="35.5" cy="35.5" r="34.75" fill="#FFFBF8" stroke={color} strokeWidth="1.5"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M27.4284 37.1081C26.2194 37.1081 25.2373 36.1259 25.2373 34.917C25.2373 33.7116 26.2194 32.7295 27.4284 32.7295C28.6373 32.7295 29.6194 33.7116 29.6194 34.917C29.6194 36.1259 28.6373 37.1081 27.4284 37.1081ZM35.9463 37.1081C34.7374 37.1081 33.7553 36.1259 33.7553 34.917C33.7553 33.7116 34.7374 32.7295 35.9463 32.7295C37.1553 32.7295 38.1374 33.7116 38.1374 34.917C38.1374 36.1259 37.1553 37.1081 35.9463 37.1081ZM42.2733 34.917C42.2733 36.1259 43.2555 37.1081 44.4644 37.1081C45.6733 37.1081 46.6555 36.1259 46.6555 34.917C46.6555 33.7116 45.6733 32.7295 44.4644 32.7295C43.2555 32.7295 42.2733 33.7116 42.2733 34.917Z" fill={color}/>  
    </svg>
  );
}

export default DetailButton;