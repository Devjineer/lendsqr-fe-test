import { useState } from "react";

const useToggle = () => {
  const [toggle, setToggle] = useState(false);

  const toggleOn = () => setToggle(true);
  const toggleOff = () => setToggle(false);
  const toggleBack = () => setToggle((prev) => !prev);

  return {
    toggle,
    toggleOn,
    toggleOff,
    toggleBack,
  };
};

export default useToggle;
