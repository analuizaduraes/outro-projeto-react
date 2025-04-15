import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  return (
    <BrowserRouter>
      <AuthRoutes />
      <AppRoutes />
    </BrowserRouter>
  )
}

//* Sem o <AppRoutes /> na árvore... (?)