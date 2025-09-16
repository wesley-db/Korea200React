import { PopUpCard } from "./components/Cards.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import {
    PrimaryPage,
    RecordBody,
    TranslateBody,
} from "./pages/PrimaryPage.jsx";

function App() {
    return (
        <PrimaryPage>
            <RecordBody />
        </PrimaryPage>
    );
    //return <HomePage/>;
}

export default App;
