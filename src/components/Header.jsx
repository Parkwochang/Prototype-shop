export default function Header() {
  return (
    <header>
      <div className="header_container">
        <div className="title">Awesome Prototype in shop</div>
        <div className="subtitle">
          Check out what other designers have created using ProtoPie-download
          these examples to learn exactly how they made their interactions.
        </div>
        <div className="btn_area">
          <a href="http://www.protopie.io" target="_BLANK" rel="noreferrer">
            <button style={{ margin: "20px 0" }}>Try ProtoPie Yourself</button>
          </a>
        </div>
      </div>
    </header>
  );
}
