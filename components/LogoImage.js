import { Image } from "react-bootstrap";

function LogoImage(props) {

  return <Image alt={props.name} height={props.height + "px"} width={props.width + "px"}  src={"/tech/" + props.name + ".png"}  />;

}

export default LogoImage;
