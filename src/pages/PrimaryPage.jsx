import classNames from "classnames";
import { HeartIcon, Logo, SearchBar } from "../components/Widgets";
import { TranslateCard, RecordCard } from "../components/Cards";
import { Virtuoso } from "react-virtuoso";

export function PrimaryPage({ children }) {
    /*Styling*/
    const background = classNames(
        "bg-[url(../assets/pattern.jpg)] bg-contain bg-repeat",
    );
    const divider = classNames(
        "w-49/50",
        "mx-auto",
        "border-stone-950/60"
    );

    /*Background*/
    return (
        <div className={background}>
            <Header />
            <hr className={divider} />
            {children}
        </div>
    );
}

function Header() {
    /*Styling*/
    const background = classNames(
        "sticky flex flex-row",
        "p-4 gap-x-4",
        "h-20",
        "bg-neutral-300/60",
        "md:h-25"
    );
    const logo = classNames(
        "basis-1/6",
        "text-left text-5xl",
        "hidden",
        "md:block",
        "lg:text-6xl"
    );
    const searchBar = classNames("basis-4/6", "grow", "text-xl", "lg:text-3xl");
    const button = classNames("basis-1/10", "md:basis-1/15");

    /*Structure*/
    return (
        <header className={background}>
            <Logo style={logo} />
            <SearchBar style={searchBar} />
            <HeartIcon style={button} />
        </header>
    );
}

export function TranslateBody({ saveWord, data, style }) {
    /*Styling*/
    const wrapper = classNames("h-screen", style);
    const cardWrapper = classNames("p-8");

    return (
        <div className={wrapper}>
            {data && (
                <Virtuoso
                    data={data}
                    itemContent={(_, item) => (
                        <div className={cardWrapper}>
                            <TranslateCard data={item} saveWord={saveWord} />
                        </div>
                    )}
                />
            )}
        </div>
    );
}

export function RecordBody({ searchWord, style }) {
    const dummy = {
        id: "58639",
        kWord: "뱀",
        meaning: ["snake"],
    };

    /*Styling*/
    const background = classNames("flex", "px-8", style);

    /*Structure*/
    return (
        <div className={background}>
            <RecordCard data={dummy} searchWord={searchWord} />
        </div>
    );
}
