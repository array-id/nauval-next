import NavItem from "../components/NavItem";
import classnames from "classnames";

export default function Nav({ scheme, dir }) {
    const dirs = {
        horizontal: "justify-center space-x-10",
        vertical: "flex-col space-y-6"
    }

    const pickedDir = dirs[dir];

    return (
        <ul className={classnames("flex", pickedDir)}>
            <NavItem scheme={scheme} href="#profile">Profile</NavItem>
            <NavItem scheme={scheme} href="#skills">Skills</NavItem>
            <NavItem scheme={scheme} href="#projects">Projects</NavItem>
            <NavItem scheme={scheme} href="#contact">Contact</NavItem>
        </ul>
    );
}
