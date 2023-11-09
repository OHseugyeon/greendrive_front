import { BrowserRouter, Route, Routes } from "react-router-dom";
import Firstpage from "./pages/Login&Join/Firstpage";
import Join from "./pages/Login&Join/Join";
import Login from "./pages/Login&Join/Login";
import Findid from "./pages/Login&Join/Findid";
import Carregist from "./pages/Login&Join/Carregist";
import KakaoCode from "./pages/Login&Join/KakaoCode"

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Firstpage />} />
          <Route path="/Join" element={<Join />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Findid" element={<Findid />} />
          <Route path="/Carregist" element={<Carregist />} />
          <Route path="/login/oauth2/callback/kakao" element={<KakaoCode />} />

          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
