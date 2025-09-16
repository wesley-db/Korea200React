import classNames from "classnames";
import heartIcon from "../assets/heart-icon.svg";

export function Logo({ style }) {
    /*Styling*/
    const logo = classNames(
        "font-lobster-two italic",
        "text-white",
        "text-center",
        //text-shadow-[first-four outlines the text, the last is the shadow]
        "text-shadow-[-1px_-1px_black,1px_-1px_black,1px_1px_black,-1px_1px_black,0.1em_0.1em_black]",
        "mx-auto my-auto",
        style
    );

    /*Structure*/
    return <h1 className={logo}>Korea200</h1>;
}

export function SearchBar({ value, action, style }) {
    /*Styling*/
    const form = classNames(
        "flex gap-x-2",
        "md:gap-x-4",
        style
    );
    const textBox = classNames(
        "text-center",
        "bg-white",
        "border-2 rounded-3xl",
        "focus:border-none focus:outline-none",
        "w-full h-full"
    );
    const textBoxOutline = classNames(
        "w-5/6 h-full", 
        "p-1",
        "rounded-3xl", 
        "focus-within:bg-linear-to-b from-red-500 to-blue-500 focus-within:ring-1"
    );
    const button = classNames(
        "text-white",
        "bg-black",
        "w-1/6 h-full",
        "border-2 border-solid border-black rounded-2xl",
        "focus:border-none",
        "active:bg-gray-500"
    );

    /*Structure*/
    return (
        <form onSubmit={action} className={form}>
            <div className={textBoxOutline}>
                <input
                    type="text"
                    value={value}
                    placeholder="Please type a korean word."
                    className={textBox}
                />
            </div>
            <input type="submit" value="Search" className={button} />
        </form>
    );
}

export function HeartIcon({ style, action }) {
    /*Styling*/
    const button = classNames(style, "hover:scale-125", "active:scale-75");
    const image = classNames("h-full","object-contain", "mx-auto");

    /*Structure*/
    return (
        <button onClick={action} className={button}>
            <img src={heartIcon} alt="HeartIcon" className={image} />
        </button>
    );
}
