import Header from "./components/Header";
import Prototypes from "./components/Prototypes";
import Order from "./components/Order";
import Footer from "./components/Footer";
import AppStateProvider from "./providers/AppStateProvider";

function App() {
  return (
    <AppStateProvider>
      <Header />
      <div className="container">
        <Prototypes />
        <Order />
        <Footer />
      </div>
    </AppStateProvider>
  );
}

export default App;
