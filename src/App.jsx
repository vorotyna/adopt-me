import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Dioji" animal="dog" breed="Doberman" />
      <Pet name="Pepper" animal="bird" breed="Cockatiel" />
      <Pet name="Siatee" animal="cat" breed="Sphynx" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
