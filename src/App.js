import "./style.css";
import Header from "./components/header";
import Footer from "./components/footer";
import InputDetails from "./components/inputDetails";
export default function App() {
  return (
    <div className="App">
      <Header />
      <br></br>
      <InputDetails />
      <Footer />
    </div>
  );
}
