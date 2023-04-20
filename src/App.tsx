import { NavLinkMenu } from "./components/Header/NavLinkMenu";
import {
  headerIcons,
  headerLinks,
  navLinks,
} from "./components/Header/HeaderDetails";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header headerLinks={headerLinks} headerIcons={headerIcons} />
      <NavLinkMenu navLinks={navLinks} />
      {/* <HomePage /> */}
      {/* <LoginForm /> */}
      {/* <ProfileModal /> */}
    </div>
  );
}

export default App;
