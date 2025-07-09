import { useRef, useState } from "react";

function Sticker() {
  const [position, setPosition] = useState(() => ({ x: 0, y: 0 }));
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

function handleMouseDown(event) {
  dragging.current = true;
  offset.current.x = event.clientX - position.x;
  offset.current.y = event.clientY - position.y;
}

function handleMouseMove(event) {
  if (dragging.current) {
    setPosition({
      x: event.clientX - offset.current.x,
      y: event.clientY - offset.current.y,
    });
  }
}

function handleMouseUp() {
  dragging.current = false;
  window.addEventListener("mouseup", handleMouseUp);
}


  return (
    <div
    onMouseMove = {handleMouseMove}
    onMouseUp = {handleMouseUp}
  >
      <img src="images\stickers\bird1-coot.PNG"
      onMouseDown = {handleMouseDown}
      alt="Sticker"
      draggable = {false}
      onDragStart={(event) => event.preventDefault()}
      style = {{
        position: "absolute", top: position.y, left: position.x,
        cursor: "grab",
        }}
      />
   </div>





  );
}

export default Sticker;
