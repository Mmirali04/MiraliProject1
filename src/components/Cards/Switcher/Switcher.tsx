import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../../../hooks/useDarkSide";

function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "dark" ? false : true
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <div>
        <DarkModeSwitch
          className="relative left-3"
          checked={darkSide}
          onChange={toggleDarkMode}
          size={30}
          moonColor="yellow"
          sunColor="black"
        />
      </div>
    </>
  );
}
export default Switcher;