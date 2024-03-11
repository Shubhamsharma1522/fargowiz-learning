import React from "react";
import reactImg from './assets/react-core-concepts.png'
import componentsImg from './assets/components.png'

const reactDescription = ["fundamentals", "Core Concept", "java"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescription[genRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Styled Atom" />
      <h1>React Essential</h1>
      <p>
        {description} react concepts you will need for almost any app you are
        going to build{" "}
      </p>
    </header>
  );
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <h1>Core Concepts</h1>
          <ul>
            <CoreConcept  title='Components'
            description ="the core UI demo"
            image={componentsImg}/>
            <CoreConcept title=""/>
            <CoreConcept />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
