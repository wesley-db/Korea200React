import classNames from "classnames";
import { HeartIcon, Logo, SearchBar } from "../components/Widgets.jsx";
import naksansaTemple from "../assets/NaksansaTemple.png";

export function HomePage() {
    const backgroundStyle = classNames(
        "fixed", //ensuring that the background is the point of anchor of any positioning
        "bg-sky-blue",
        "h-screen w-screen"
    );
	const iconStyle = classNames(
        "fixed right-0",
		"m-4",
        "size-1/9",
		"md:size-1/15 md:m-7",
        "active:scale-75"
	);

    return (
        <div className={backgroundStyle}>
            <TempleImage/>
            <CenterComp/>
			<HeartIcon style={iconStyle}/>
        </div>
    );
}

function TempleImage() {
    const imgStyle = classNames(
        "fixed",
        "bottom-0",
        "md:object-cover md:h-full md:w-full md:right-[-1.5%]"
    );

    return <img src={naksansaTemple} alt="" className={imgStyle} />;
}

function CenterComp() {
    const divStyle = classNames(
        "flex flex-col",
        "p-10",
        "w-full",
        "absolute top-1/2 -translate-y-1/2",
    );
    const logoStyle = classNames("text-7xl", "md:text-[10rem]");
	const searchBarStyle = classNames(
		"h-15",
		"mt-4",
		"md:mt-7 md:h-28 md:text-3xl"
	);

    return (
        <div className={divStyle}>
            <Logo style={logoStyle} />
            <SearchBar style={searchBarStyle} />
        </div>
    );
}
