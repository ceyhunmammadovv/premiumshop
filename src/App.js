import React from "react"
import Apple from "./components/Apple/Apple"
import Samsung from "./components/Samsung/Samsung"
import Xiaomi from "./components/Xiaomi/Xiaomi"
import Home from "./components/Home/Home"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Appleacc from "./components/Accessories/Appleacc"
import Cart from "./components/Cart/Cart"
import Signin from "./components/Signin/Signin"
import Iphone12 from "./components/iPhone/Iphone12"
import Iphone12pro from "./components/iPhone/Iphone12pro"
import Iphone11 from "./components/iPhone/Iphone11"
import Airpods from "./components/iPhone/Airpods"
import Iphonese from "./components/iPhone/Iphonese"
import Iphone from "./components/iPhone/Iphone"
import Iphone12promax from "./components/iPhone/Iphone12promax"
import Iphone12mini from "./components/iPhone/Iphone12mini"
import Mac from "./components/Mac/mac"
import Imac24 from "./components/Mac/Imac24"
import Macbookair from "./components/Mac/Macbookair"
import Macbookpro13 from "./components/Mac/Macbookpro13"
import Macbookpro16 from "./components/Mac/Macbookpro16"
import Macmini from "./components/Mac/Macmini"
import Ipad from "./components/Ipad/Ipad"
import Ipadpro from "./components/Ipad/Ipadpro"
import Haqqimizda from "./components/Haqqimizda/Haqqimizda"
import Sertler from "./components/Sertler/Sertler"
import Mexfilik from "./components/Mexfilik/Mexfilik"
import Watch from "./components/Watch/Watch"
import Ipadair from "./components/Ipad/Ipadair"
import Ipad10 from "./components/Ipad/Ipad10"
import { Route, Switch } from "react-router-dom"
import TV from "./components/Tv/TV"


function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/samsung">
          <Samsung />
        </Route>
        <Route path="/xiaomi">
          <Xiaomi />
        </Route>
        <Route path="/appleacc">
          <Appleacc />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/iphone">
          <Iphone />
        </Route>
        <Route path="/ipad">
          <Ipad />
        </Route>
        <Route path="/ipadpro">
          <Ipadpro />
        </Route>
        <Route path="/iphone12promax">
          <Iphone12promax />
        </Route>
        <Route path="/iphone12">
          <Iphone12 />
        </Route>

        <Route path="/iphone12mini">
          <Iphone12mini />
        </Route>

        <Route path="/iphone12pro">
          <Iphone12pro />
        </Route>
        <Route path="/airpods">
          <Airpods />
        </Route>

        <Route path="/iphone11">
          <Iphone11 />
        </Route>
        <Route path="/iphonese">
          <Iphonese />
        </Route>
        <Route path="/apple">
          <Apple />
        </Route>

        <Route path="/mac">
          <Mac />
        </Route>

        <Route path="/imac24">
          < Imac24 />
        </Route>

        <Route path="/macbookair">
          < Macbookair />
        </Route>

        <Route path="/macbookpro13">
          < Macbookpro13 />
        </Route>

        <Route path="/macbookpro16">
          < Macbookpro16 />
        </Route>

        <Route path="/macmini">
          < Macmini />
        </Route>

        <Route path="/haqqimizda">
          <Haqqimizda />
        </Route>

        <Route path="/sertler">
          <Sertler />
        </Route>

        <Route path="/mexfilik">
          <Mexfilik />
        </Route>
        <Route path="/watch">
          <Watch />
        </Route>
        <Route path="/ipadair">
          <Ipadair />
        </Route>
        <Route path="/ipad10">
          <Ipad10 />
        </Route>
        <Route path="/tv">
          <TV/>
        </Route>

      </Switch>
      <Footer />
    </div>
  );
}
export default App;
