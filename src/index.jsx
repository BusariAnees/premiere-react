import { createRoot } from "react-dom/client";
import { Fragment } from "react";
import Header from "./Header";
import Main from "./MainContent";
import Footer from "./Footer";

const root = createRoot(document.getElementById("root"));

function Here() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

root.render(<Here />);
