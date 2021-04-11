import classnames from "classnames";

export default function ContactItem({ label, value, icon, className }) {
    return (
        <div className={classnames("flex items-start", className)}>
            <img src={icon} className="w-8" />
            <div className="ml-4">
                <div className="text-sm font-semibold mb-1">{label}</div>
                <div className="text-lg font-semibold">{value}</div>
            </div>
        </div>
    );
}