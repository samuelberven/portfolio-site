import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
const ToggleThemeButton = () => {
    const { toggleTheme } = useContext(ThemeContext);
    return _jsx("button", { onClick: toggleTheme, children: "Toggle Theme" });
};
export default ToggleThemeButton;
//# sourceMappingURL=ToggleThemeButton.js.map