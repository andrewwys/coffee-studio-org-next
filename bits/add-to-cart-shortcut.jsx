//The Add-to-cart shortcut icon shown on hover of the product card.
const AddToCartShortcut = ({ color, width }) => {
  return (
    <svg width={width} height={width} viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="35.5" cy="35.5" r="34.75" fill="#FFFBF8" stroke={color} strokeWidth="1.5"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M27.2261 50.9893C28.0349 50.9893 28.6923 51.6467 28.6923 52.4555C28.6923 53.2643 28.0349 53.9198 27.2261 53.9198C26.4172 53.9198 25.7617 53.2643 25.7617 52.4555C25.7617 51.6467 26.4172 50.9893 27.2261 50.9893Z" stroke={color} strokeWidth="1.5" 
      strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M48.7934 50.9893C49.6022 50.9893 50.2596 51.6467 50.2596 52.4555C50.2596 53.2643 49.6022 53.9198 48.7934 53.9198C47.9846 53.9198 47.3271 53.2643 47.3271 52.4555C47.3271 51.6467 47.9846 50.9893 48.7934 50.9893Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.2705 19.2295L22.2572 19.9195L24.1029 41.9094C24.2524 43.7015 25.7493 45.0777 27.5472 45.0777H48.4618C50.1792 45.0777 51.6358 43.8165 51.8831 42.1145L53.702 29.545C53.9263 27.9944 52.7245 26.6067 51.1586 26.6067H22.8973" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M40.0742 33.6908H45.3891" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <style jsx>{`
        svg {
          cursor: pointer;
        }
      `}</style>
    </svg>
  );
}

export default AddToCartShortcut;