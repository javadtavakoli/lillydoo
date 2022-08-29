import { useState } from "react";
import "./styles.scss";
const SizeSelectorComponent = () => {
  const [index, setIndex] = useState(1);
  const LENGTH = 5;
  const decrease = () => {
    setIndex((_index) => {
      if (_index > 1) return _index - 1;
      return _index;
    });
  };
  const increase = () => {
    setIndex((_index) => {
      if (_index < LENGTH) return _index + 1;
      return _index;
    });
  };
  return (
    <div className="size-selector__row">
      <div className="size-selector__title-col">
        <div className="size-selector__title">Größe</div>
        <div className="size-selector__quantity">125 Pants</div>
      </div>
      <div className="size-selector__buttons-container">
        <button
          className="size-selector__button"
          onClick={decrease}
          disabled={index === 1}
        >
          -
        </button>
        <div className="size-selector__slider">
          {[...new Array(LENGTH)].map((_, i) => (
            <div
              className={`size-selector__info ${
                i > index - 1
                  ? "size-selector__info--after"
                  : i < index - 1
                  ? "size-selector__info--before"
                  : ""
              }`}
            >
              <div className="size-selector__number">N° {i + 1}</div>
              <div className="size-selector__desc">9 bis 14 Kilo </div>
            </div>
          ))}
        </div>
        <button
          className="size-selector__button"
          onClick={increase}
          disabled={index === LENGTH}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default SizeSelectorComponent;
