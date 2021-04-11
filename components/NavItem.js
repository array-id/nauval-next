import classnames from "classnames";

export default function NavItem({ href, scheme, children }) {
    const schemes = {
        light: "text-white text-opacity-60 hover:text-opacity-100",
        dark: "text-black"
    }
    
    const pickedScheme = schemes[scheme];

    return (
        <li>
            <a 
                href={href} 
                className={classnames("text-lg transition font-semibold", pickedScheme)}
            >
                {children}
            </a>
        </li>
    );
}
