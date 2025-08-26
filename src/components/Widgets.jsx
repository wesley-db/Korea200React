import classNames from "classnames";
import heartIcon from "../assets/heart-icon.svg";

export function Logo({ style }) {
    const baseStyle = classNames(
        "font-lobster-two italic",
        "text-white",
        "text-center",
        //text-shadow-[first-four outlines the text, the last is the shadow]
        "text-shadow-[-1px_-1px_black,1px_-1px_black,1px_1px_black,-1px_1px_black,0.1em_0.1em_black]",
        style
    );

    return <h1 className={baseStyle}>Korea200</h1>;
}

export function SearchBar({ value, action, style }) {
    const formStyle = classNames(
        "flex gap-x-2",
        //"focus-within:bg-linear-to-b from-red-500 to-blue-500",
        "md:gap-x-4",
        //"focus-within:outline-1",
        style
    );
    const textBoxStyle = classNames(
        "bg-white",
        "text-center",
        "border-2 rounded-3xl",
        "focus:border-none focus:outline-none",
        "w-full h-full"
    );
    const outline = classNames(
        "w-5/6 h-full", 
        "p-1",
        "rounded-3xl", 
        "focus-within:bg-linear-to-b from-red-500 to-blue-500 focus-within:ring-1"
    );
    const searchButtonStyle = classNames(
        "text-white",
        "bg-black",
        "w-1/6 h-full",
        "border-2 border-solid border-black rounded-2xl",
        "focus:border-none",
        "active:bg-gray-500"
    );

    return (
        <form onSubmit={action} className={formStyle}>
            <div className={outline}>
                <input
                    type="text"
                    value={value}
                    placeholder="Please type a korean word."
                    className={textBoxStyle}
                />
            </div>
            <input type="submit" value="Search" className={searchButtonStyle} />
        </form>
    );
}

export function HeartIcon({ style, action }) {
    const buttonStyle = classNames(style);

    return (
        <button onClick={action} className={buttonStyle}>
            <img src={heartIcon} alt="HeartIcon" />
        </button>
    );
}
