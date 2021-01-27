import React from "react";
//import HeaderBlock from './components/HeaderBlock';
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layaout/Layaout";
import Header from "./components/Header/Header";
// import bg from "./assets/bg3.jpg";

const App = () => {
  // const bg = "../../assets/bg3.jpg"
  return (
    <>
      {/* <HeaderBlock title="This is new Title" 
        descr="This is new description!"
      />
      <HeaderBlock title="This is new2 Title" 
        hideBackground={true}
      /> */}
      <Header title="This is Title" descr="This is description!" />
      <Layout
        id="1"
        title="This is Title"
        descr="This is description!"
        urlBg={false}
        colorBg={false}
      />
      <Layout
        id="2"
        title="This is Title"
        descr="This is description!"
        urlBg={true}
        colorBg={true}
      />
      <Layout
        id="3"
        title="This is Title"
        descr="This is description!"
        urlBg={false}
        colorBg={false}
      />
      <Footer />
    </>
  );
};

export default App;
