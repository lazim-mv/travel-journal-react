import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import data from "./data";

function App() {
  const heroCards = data.map((item) => {
    return <Hero key={item.id} {...item} />;
  });

  return (
    <div className="App">
      <Header />
      <section className="padding">{heroCards}</section>
    </div>
  );
}

export default App;
