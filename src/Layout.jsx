import React, { useEffect, useState } from "react";
import { IoMdSettings } from "react-icons/io";
// import React from "react";
// import Header from "./Components/Header";
// import Footer from "./Components/Footer";
import { Outlet } from "react-router";
import Header from "./assets/Components/Layout/Header";
import Footer from "./assets/Components/Layout/Footer";
import LoaderCard from "./assets/Components/component/LoaderCard";
// import rasm from "../src/assets/img/fon5.jpg";

export default function Layout() {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 50);
    return () => clearTimeout(timer);
  }, []);
  const goBack = () => {
    window.history.back();
  };
  const [changeColor, setChangeColor] = useState(false);
  const onchangeMode = (mode) => {
    const body = document.querySelector("body");
    body.className = mode;
    console.log(mode);
    console.log(body.className);
  };

  // const BackButton = () => {
  //   if (window.location.pathname !== "/") {
  //     return (
  //       <div className="fixed flex-col justify-end">
  //         <button
  //           className="bg-gradient-to-r bg-blue-900 hover:from-blue-600 hover:to-green-600 text-white font-bold py-2 px-4 rounded-full shadow-xl transition-transform transform hover:scale-110"
  //           onClick={goBack}
  //         >
  //           Orqaga
  //         </button>
  //       </div>
  //     );
  //   }
  //   return null;
  // };

  return (
    <>
      {load ? (
        <div className="loyaut-loader">
          <LoaderCard />
        </div>
      ) : (
        <div className="layoute-container">
          <Header />
          <div className="container-layout">
            <Outlet />
          </div>

          {/* Add the BackButton component */}
          <BackButton />

          <div
            className={`color__switcher ${changeColor && "color__switcher--open"}`}
            style={{ position: "absolute" }}
          >
            <button
              onClick={() => setChangeColor((prevState) => !prevState)}
              className="color_switcher_button"
            >
              <i>
                <IoMdSettings />
              </i>
            </button>
            <h1 className="color__switcher__title">Fon tanlang</h1>
            <div className="color__list ">
              <div
                className="color__item bgThreecolor"
                onClick={() => onchangeMode("bgThree")}
              ></div>
              <div
                className="color__item bgSevencolor"
                onClick={() => onchangeMode("bgSeven")}
              ></div>
              <div
                className="color__item bgEightcolor"
                onClick={() => onchangeMode("bgEight")}
              ></div>
              <div
                className="color__item bg10color"
                onClick={() => onchangeMode("bg10")}
              ></div>
              <div
                className="color__item bg11color"
                onClick={() => onchangeMode("bg11")}
              ></div>
              <div
                className="color__item bg12color"
                onClick={() => onchangeMode("bg12")}
              ></div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
