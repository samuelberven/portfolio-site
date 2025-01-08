import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Section from '../components/Section';
const Contact = () => {
    return (_jsx(Section, { title: "Contact", children: _jsxs("form", { children: [_jsx("label", { children: "Name:" }), _jsx("input", { type: "text", name: "name" }), _jsx("label", { children: "Email:" }), _jsx("input", { type: "email", name: "email" }), _jsx("button", { type: "submit", children: "Send Message" })] }) }));
};
export default Contact;
//# sourceMappingURL=Contact.js.map