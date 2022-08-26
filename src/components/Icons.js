import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "./Icons.css";

library.add(fas);

export const Icons = () => (
  <div className="icons">
    <FontAwesomeIcon icon="user" id="icone-user"  />
    <FontAwesomeIcon icon="bag-shopping" id="icone-bag"/>
    
  </div>
);
export default Icons;
