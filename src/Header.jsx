
export default function Header() {
    return (
      <header>
        <span className="header">
        <img className="image" src="/src/react.png"  alt="React logo" />
        <p>ReactFacts</p>
        </span>
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