import { ISelectorButtonProps } from "./types";
import "./styles.scss";
const SelectorButtonComponent = (props: ISelectorButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`selector-button ${
        props.active ? "selector-button--active" : ""
      }`}
    >
      {props.children}
    </button>
  );
};
export default SelectorButtonComponent;
