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
  border: `3px solid ${hovered ? '#000' : '#ccc'}`,
  };
  return (
    <Image
      src="https://via.placeholder.com/150"
      roundedCircle
      fluid
      style={borderStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default RoundedImage;