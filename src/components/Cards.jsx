import classNames from "classnames";
import audioIcon from "../assets/audio-icon.svg";
import addIcon from "../assets/add-icon.svg";

export function TranslateCard({ data, saveWord, style }) {
    const { id, kWord, meaning, audio: audioLink, examples } = data || {};
    /*Styling*/
    const background = classNames(style);
    const divider = classNames("my-2");

    /*Structure*/
    return (
        <Card style={background}>
            <Header kWord={kWord} audioLink={audioLink} saveWord={saveWord} />
            <List title={"Meaning"} content={meaning} />
            <List title={"Examples"} content={examples} />
            <hr className={divider} />
            <Footer kWord={kWord} />
        </Card>
    );
}

export function RecordCard({ data, searchWord, style }) {
    const { id, kWord, meaning } = data || {};
    /*Styling*/
    const background = classNames(
        "hover:outline-1 hover:scale-102",
        "active:scale-95",
        style
    );
    const header = classNames("text-6xl font-medium", "mb-2");
    const body = classNames("text-lg");

    /*Structure*/
    return (
        <Card style={background} action={searchWord}>
            <h1 className={header}>{kWord}</h1>
            <List title={"Meaning"} content={meaning} style={body} />
        </Card>
    );
}

export function PopUpCard({ action, style }) {
    /*Styling*/
    const background = classNames(
        "fixed",
        "bg-black/40",
        "inset-0",
        "flex",
        "justify-center", // Horizontally centers the children
        style
    );
    const cardBackground = classNames(
        "!bg-white",
        "m-10",
        "h-fit !w-fit",
        "lg:text-xl"
    );
    const cardForm = classNames("flex flex-col", "gap-2");
    const header = classNames("font-medium", "text-xl", "lg:text-3xl");
    const textBox = classNames(
        "border",
        "rounded-sm",
        "p-1",
        "w-xs",
        "lg:w-lg"
    );
    const submit = classNames(
        "self-end",
        "pr-5",
        "underline italic",
        "text-blue-800 text-center",
        "active:text-purple-600"
    );

    /*Structure*/
    return (
        <div className={background}>
            <Card style={cardBackground}>
                <form onSubmit={action} className={cardForm}>
                    <h1 className={header}>What is your name?</h1>
                    <input
                        type="text"
                        placeholder="Please type your name."
                        className={textBox}
                    />
                    <input type="submit" value="submit" className={submit} />
                </form>
            </Card>
        </div>
    );
}

/****************Utilities********************************/

function Card({ style, action, children }) {
    /*Styling*/
    const background = classNames(
        "bg-white/95",
        "rounded-3xl",
        "border-2",
        "shadow-[5px_5px_5px_rgba(0,0,0,0.5)]",
        "mx-auto",
        "p-4",
        "w-full",
        style
    );

    /*Structure*/
    return (
        <article onClick={action} className={background}>
            {children}
        </article>
    );
}

function Header({ kWord, audioLink, saveWord, style }) {
    /*Styling*/
    const background = classNames("flex flex-row", style);
    const col1 = classNames(
        "self-center",
        "text-7xl text-center font-medium",
        "my-4"
    );
    const col2 = classNames("grow", "flex flex-col", "justify-between");
    const col3 = classNames("basis-20", "self-start justify-items-end");
    const audio = classNames(
        "w-7",
        "object-contain",
        "hover:scale-125",
        "active:scale-75"
    );
    const add = classNames(
        "w-10",
        "object-contain object-top-right",
        "hover:scale-125",
        "active:scale-75"
    );
    const source = classNames("text-sm", "font-light", "lg:text-base");

    return (
        <header className={background}>
            <h1 className={col1}>{kWord}</h1>
            <div className={col2}>
                {audioLink && (
                    <a
                        href={audioLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={audioIcon} className={audio} />
                    </a>
                )}
                <p className={source}>
                    Source: 국립국어원's Basic/Learner's Dictionary
                </p>
            </div>
            <button onClick={saveWord} className={col3}>
                <img src={addIcon} className={add} />
            </button>
        </header>
    );
}

function Footer({ kWord, style }) {
    /*Styling*/
    const background = classNames(style);
    const link = classNames(
        "block",
        "underline italic",
        "text-blue-800 text-center",
        "visited:text-purple-600"
    );

    /*Structure*/
    return (
        <footer className={background}>
            <a
                href={`${import.meta.env.VITE_PAPAGO_URL}${kWord}`}
                target="_blank"
                rel="noopener noreferrer"
                className={link}
            >
                Check Papago's Translation
            </a>
            <a
                href={`${import.meta.env.VITE_GOOGLE_URL}${kWord}`}
                target="_blank"
                rel="noopener noreferrer"
                className={link}
            >
                Check Google Translate's Translation
            </a>
        </footer>
    );
}

function List({ title, content, style }) {
    /*Styling*/
    const background = classNames(style, "lg:text-xl");
    const header = classNames("font-medium");
    const list = classNames("list-disc", "px-10");

    /*Structure*/
    return (
        <section className={background}>
            <h1 className={header}>{title}</h1>
            <ul className={list}>
                {content.map((element, index) => (
                    <li key={index}>{element}</li>
                ))}
            </ul>
        </section>
    );
}
