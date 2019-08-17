import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import Welcome from "./components/WelcomePage.js"
import CharacterList from './components/CharacterList.js'
import LocationList from './components/LocationsList.js'
import { BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
// import AppRouter from "./components/AppRouter.js";

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <div className='content-container'>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/characters' component={CharacterList} />
        <Route exact path='/location' component={LocationList} />
      </div>
      {/* <AppRouter /> */}
    </main>
  );
}
