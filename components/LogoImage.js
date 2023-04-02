import { Image } from "react-bootstrap";

function LogoImage(props) {

  return <Image alt={props.name} height={40} width={40}  src={"/tech/" + props.name + ".png"}  />;

}

export default LogoImage;
