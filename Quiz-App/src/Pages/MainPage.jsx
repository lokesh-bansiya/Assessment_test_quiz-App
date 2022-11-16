import { HomePage } from "./HomePage";
import { Route,Routes } from "react-router-dom";
import { Assessment_Quiz } from "./Assessment_Quiz";

const MainPage = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/testpage" element={<Assessment_Quiz/>}/>
        </Routes>
    );
}

export {MainPage};