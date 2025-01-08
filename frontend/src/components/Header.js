import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
const Header = () => {
    return (_jsx("header", { children: _jsx("nav", { children: _jsxs("ul", { children: [_jsx("li", { children: _jsx(Link, { to: "/", children: "Home" }) }), _jsx("li", { children: _jsx(Link, { to: "/projects", children: "Projects" }) }), _jsx("li", { children: _jsx(Link, { to: "/education", children: "Education" }) }), _jsx("li", { children: _jsx(Link, { to: "/work", children: "Work History" }) }), _jsx("li", { children: _jsx(Link, { to: "/contact", children: "Contact" }) })] }) }) }));
};
export default Header;
//# sourceMappingURL=Header.js.map