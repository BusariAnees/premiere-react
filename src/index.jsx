import { createRoot } from "react-dom/client";
import { Fragment } from "react";
const root = createRoot(document.getElementById("root"));

function Header() {
  return (
    <header>
      <img className="image" src="/src/react.png"  alt="React logo" />
      <nav>
        <ul className="nav-list">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function Main() {
  return (
    <main>
      <h1> Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Originally created by Jordan Walker</li>
        <li> Has well over 200k stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <small> 2024 copyright Anees is here.  All rights reserved</small>
    </footer>
  );
}

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
