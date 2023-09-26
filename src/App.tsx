import { Routes, Route } from "react-router-dom";
import LanguageWrapper from "./services/languages/LanguageWraper";
import routes from "./routes";

function App() {
  return (
    <LanguageWrapper>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Routes>
    </LanguageWrapper>
  );
}

export default App;
