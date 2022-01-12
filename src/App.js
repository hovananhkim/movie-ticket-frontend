import "./App.css";
import BodyComponent from "./components/body/body.component";
import FooterComponent from "./components/footer.component";
import HeaderComponent from "./components/header/header.component";

function App() {
  return (
    <div>
      <HeaderComponent />
      <BodyComponent />
      {/* <FooterComponent /> */}
    </div>
  );
}

export default App;
