import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import Welcome from "./components/WelcomePage"
import { BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
// import AppRouter from "./components/AppRouter.js";

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route exact path='/' component={Welcome} />
      {/* <AppRouter /> */}
    </main>
  );
}
