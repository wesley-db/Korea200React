import classNames from "classnames";
import { HeartIcon, Logo, SearchBar } from "../components/Widgets";
import { TranslateCard, RecordCard } from "../components/Cards";

export function PrimaryPage({children}) {
    /*Styling*/
    const background = classNames(
        "fixed", //ensuring that the background is the point of anchor of any positioning,
        "bg-[url(../assets/pattern.jpg)] bg-contain bg-repeat",
        "h-screen w-screen"
    );
    const divider = classNames(
        "w-49/50", "mx-auto mb-5", "border-stone-950/60"
    )

    /*Background*/
    return (
        <div className={background}>
            <Header/>
            <hr className={divider}/>
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

export function TranslateBody({saveWord, style}) {
    const dummy = {
      id: "58639",
      kWord: "뱀",
      meaning: [
        "snake"
      ],
      audio: "https://krdicmedia.korean.go.kr/front/search/searchResultView.do?file_no=324523",
      examples: [
        "지수는 산에 갔다가 기어가는 뱀을 보고는 무서워서 소리를 질렀다.",
        "승규는 독이 있는 뱀에게 다리를 물려서 큰일이 날 뻔한 적이 있었다.",
        "징그러운 뱀.",
        "뱀이 기어가다.",
        "뱀이 물다.",
        "뱀을 무서워하다.",
        "뱀을 잡다.",
        "뱀에게 물리다.",
        "저기 까치 둥지 근처에 뱀 한 마리가 스멀스멀 기어 올라가고 있어!",
        "뱀이 까치 새끼를 노리나 봐!"
      ]
    };

    /*Styling*/
    const background = classNames(
        "flex",
        "px-8",
        style
    );
    
    /*Structure*/
    return (
        <div className={background}>
            <TranslateCard data={dummy} saveWord={saveWord}/>
        </div>
    );
}

export function RecordBody({searchWord, style}) {
    const dummy = {
      id: "58639",
      kWord: "뱀",
      meaning: [
        "snake"
      ]
    };

    /*Styling*/
    const background = classNames(
        "flex",
        "px-8",
        style
    );
    
    /*Structure*/
    return (
        <div className={background}>
            <RecordCard data={dummy} searchWord={searchWord}/>
        </div>
    );
}