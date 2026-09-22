export default function HomeOnlyButton({
    children,
    className = "",
    onClick,
    type = "button",
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`home-cta-btn tf-btn btn-fill animate-btn ${className}`.trim()}
        >
            {children}
            <i className="icon-arrow-right-2 fs-24" />
        </button>
    );
}