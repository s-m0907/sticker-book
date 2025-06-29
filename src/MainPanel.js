import Background from "./assets/bird1-coot.PNG";

function MainPanel() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: "solid black 1px",
        flex: "3",
      }}
    >
      {/* <img
        src={Background}

      alt="Main Landscape" style=
      {{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
      /> */}
    </div>
  );
}

export default MainPanel;
