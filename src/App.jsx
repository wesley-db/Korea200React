import { PopUpCard } from "./components/Cards.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import {
    PrimaryPage,
    RecordBody,
    TranslateBody,
} from "./pages/PrimaryPage.jsx";

function App() {
    const translateData = Array.from({ length: 9 }, (_el, _ind) => ({
        id: "58639",
        kWord: "뱀",
        meaning: ["snake"],
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
            "뱀이 까치 새끼를 노리나 봐!",
        ],
    }));
    
    return (
        <PrimaryPage>
            <TranslateBody data={translateData}/>
        </PrimaryPage>
    );
}

export default App;
