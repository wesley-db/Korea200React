import classNames from "classnames";
import { HeartIcon, Logo, SearchBar } from "../components/Widgets.jsx";
import naksansaTemple from "../assets/NaksansaTemple.png";

export function HomePage() {
    /*Styling*/
    const background = classNames(
        "fixed", //ensuring that the background is the point of anchor of any positioning
        "bg-sky-blue",
        "h-screen w-screen"
    );
	const icon = classNames(
        "fixed right-0",
		"m-4",
        "size-1/9",
		"md:m-7"
	);

    /*Structure*/
    return (
        <div className={background}>
            <TempleImage/>
            <CenterComp/>
			<HeartIcon style={icon}/>
        </div>
    );
}

function TempleImage() {
    /*Styling*/
    const image = classNames(
        "fixed",
        "bottom-0",
        "md:object-cover md:h-full md:w-full md:right-[-1.5%]"
    );

    /*Structure*/
    return <img src={naksansaTemple} alt="" className={image} />;
}

function CenterComp() {
    /*Styling*/
    const wrapper = classNames(
        "flex flex-col",
        "p-10",
        "w-full",
        "absolute top-1/2 -translate-y-1/2",
    );
    const logo = classNames("text-7xl", "md:text-[10rem]");
	const searchBar = classNames(
		"h-15",
		"mt-4",
		"md:mt-7 md:h-28 md:text-3xl"
	);

    /*Structure*/
    return (
        <div className={wrapper}>
            <Logo style={logo} />
            <SearchBar style={searchBar} />
        </div>
    );
}
