import { Image } from 'react-bootstrap';
import { useState } from 'react';


const RoundedImage = () => {
  
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const borderStyle = {
  border: `3px solid ${hovered ? '#ff7f6c' : '#ccc'}`,
  };
  return (
    <Image
      src="/Myself150.png"
      roundedCircle
      fluid
      style={borderStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default RoundedImage;