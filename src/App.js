// import React, { useEffect } from "react"
import Apple from "./components/Apple/Apple"
import Samsung from "./components/Samsung/Samsung"
import Huawei from "./components/Huawei/Huawei"
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
import Airtag from "./components/iPhone/Airtag"
import Iphonese from "./components/iPhone/Iphonese"
import Iphonexr from "./components/iPhone/Iphonexr"
import Iphone from "./components/iPhone/Iphone"
import Iphone12promax from "./components/iPhone/Iphone12promax"
import Iphone12mini from "./components/iPhone/Iphone12mini"
import Mac from "./components/Mac/mac"
import Imac24 from "./components/Mac/imac24"
import Macbookair from "./components/Mac/macbookair"
import Macbookpro13 from "./components/Mac/macbookpro13"
import Macbookpro16 from "./components/Mac/macbookpro16"
import Macmini from "./components/Mac/macmini"
import { Route, Switch } from "react-router-dom"


function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route   path="/samsung">
          <Samsung />
        </Route>
        <Route   path="/xiaomi">
          <Xiaomi />
        </Route>
        <Route   path="/huawei">
          <Huawei />
        </Route>
        <Route   path="/appleacc">
          <Appleacc />
        </Route>
        <Route   path="/cart">
          <Cart />
        </Route>
        <Route   path="/signin">
          <Signin />
        </Route>
        <Route   path="/iphone">
          <Iphone />
        </Route>

        <Route   path="/iphone12promax">
          <Iphone12promax />
        </Route>
        <Route   path="/iphone12">
          <Iphone12 />
        </Route>

        <Route   path="/iphone12mini">
          <Iphone12mini />
        </Route>

        <Route   path="/iphone12pro">
          <Iphone12pro />
        </Route>
        <Route   path="/airpods">
          <Airpods />
        </Route>
        <Route   path="/airtag">
          <Airtag />
        </Route>
        <Route   path="/iphone11">
          <Iphone11 />
        </Route>
        <Route   path="/iphonese">
          <Iphonese />
        </Route>
        <Route   path="/iphonexr">
          <Iphonexr />
        </Route>
        <Route  path="/apple">
          <Apple />
        </Route>

        <Route path="/mac">
        <Mac/>
        </Route>

        <Route path="/imac24">
        < Imac24/>
        </Route>

        <Route path="/macbookair">
        < Macbookair/>
        </Route>

        <Route path="/macbookpro13">
        < Macbookpro13/>
        </Route>

        <Route path="/macbookpro16">
        < Macbookpro16/>
        </Route>

        <Route path="/macmini">
        < Macmini/>
          </Route>
        
      </Switch>
      <Footer />
    </div>
  );
}
export default App;
