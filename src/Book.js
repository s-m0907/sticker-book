import MainPanel from "./MainPanel";
import StickerPanel from "./StickerPanel";

function Book() {
  return (
    <div
      style={{
        border: "solid red",
        display: "flex",
        flexDirection: "row",
        padding: "15px",
      }}
    >
      <MainPanel />
      <StickerPanel />
    </div>
  );
}

export default Book;
