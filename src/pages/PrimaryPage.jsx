import classNames from "classnames";
import { HeartIcon, Logo, SearchBar } from "../components/Widgets";

export function PrimaryPage() {
    /*Styling*/
    const background = classNames(
        "fixed", //ensuring that the background is the point of anchor of any positioning,
        "bg-[url(../assets/pattern.jpg)] bg-contain bg-repeat",
        "h-screen w-screen"
    );
    const divider = classNames(
        "w-49/50", "mx-auto", "border-stone-950/60"
    )

    /*Background*/
    return (
        <div className={background}>
            <Header/>
            <hr className={divider}/>

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
    const searchBar = classNames(
        "basis-4/6",
        "grow",
        "text-xl",
        "lg:text-3xl"
    );
    const button = classNames(
        "basis-1/10",
        "md:basis-1/15"
    );

    /*Structure*/
    return (
        <header className={background}>
            <Logo style={logo}/>
            <SearchBar style={searchBar}/>
            <HeartIcon style={button}/>

        </header>
    );
}