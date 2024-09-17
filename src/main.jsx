import { createRoot } from "react-dom/client";
import { TaskProvider } from "./components/Context/Context"; // Importa el TaskProvider
import { Home } from "./Pages/Home/Home";

// Obtén el contenedor DOM donde se montará la aplicación
const container = document.getElementById("root");

// Crea el root
const root = createRoot(container);

// Renderiza la aplicación usando root.render
root.render(
    <TaskProvider>
        <Home />
    </TaskProvider>
);



