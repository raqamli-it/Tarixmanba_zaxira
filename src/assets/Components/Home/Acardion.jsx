import { Route, Routes } from "react-router";
import Layout from "../../../Layout";

import Home from "../../../assets/Page/Home";
import LibraryCatigory from "../../../assets/Page/LibraryCatigory";
import Login from "../../../assets/Page/Login";
import News from "../../../assets/Page/News";
import AboutUs from "../../../assets/Page/AboutUs";
import ShablonManba from "../../../assets/Page/Shablon";
import Shablon from "../../../assets/Page/Shablon";
import LibraryCategoryDetail from "../../../assets/Page/LibraryCatigoryDeteyl";
import CardDeteil from "../../../assets/Page/CardDeteil";
import Register from "../../../assets/Page/Register";
import NotFound from "../../../assets/Page/NotFound";
import ScrollToTop from "../../../assets/Components/component/ScrollTutop";
import { useEffect, useState } from "react";
// import registonBgImg from "./assets/img/registonBgImg.jpg";

function App() {
  const [isAccessible, setIsAccessible] = useState(false);

  useEffect(() => {
    const endTime = new Date("2024-12-19T22:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      if (now >= endTime) {
        setIsAccessible(true);
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <ScrollToTop />
      {!isAccessible ? (
        <div className="relative h-[100vh]">
          <div className="absolute top-1/2 left-1/2 text-white text-center -translate-x-1/2 -translate-y-1/2 w-[50%] md:w-[70%] sm:w-[90%]">
            <h1 className="text-[38px]">Texnik ishlar olib borilmoqda</h1>
            <p className="text-[18px]">
              Saytimiz <strong>2024-12-19 soat 22:00</strong> gacha ishlamaydi.
            </p>
            <p className="text-[16px]">Uzilishlar uchun uzr so'raymiz.</p>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" Component={Layout}>
            <Route path="/" Component={Home} />
            <Route path="/news" Component={News} />
            <Route path="/news/:id" Component={News} />
            <Route path="/library" Component={LibraryCatigory} />
            <Route
              path="/libraryDetail/:id"
              Component={LibraryCategoryDetail}
            />
            <Route path="/cardDetail/:id" Component={CardDeteil} />
            <Route path="/login" Component={Login} />
            <Route path="/sources/:type/:id" Component={Shablon} />
            <Route path="*" Component={NotFound} />
          </Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
