import { useState } from "react";
import "./Like.css";
import classNames from "classnames";

export function Like() {
  const [active, setActive] = useState<boolean>(false);
  const [rotate, setRotate] = useState<boolean>(false);

  const onClick = () => {
    setActive(!active);
    setRotate(false);
  };

  const onMouseEnter = () => {
    !active && setRotate(true);
  };
  const onMouseLeave = () => {
    setRotate(false);
  };

  return (
    <div
      className={classNames("like", {
        "like-active": active,
        "like-rotate": rotate,
      })}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    ></div>
  );
}
