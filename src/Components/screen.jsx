import { Textfit } from "@aw-web-design/react-textfit"
import "./screen.css"
function screen({value}){
  return (
    <Textfit className="screen" mode="single" max={70}>
      {value}
    </Textfit>

  );
}

export default screen;