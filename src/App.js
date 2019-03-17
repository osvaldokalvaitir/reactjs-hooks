import React, { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const response = await fetch(
      "https://api.github.com/users/osvaldokalvaitir/repos"
    );
    const responseData = await response.json();

    setData(responseData);
  }, []);

  return (
    <ul>
      {data.map(repo => (
        <li key={repo.id}>{repo.name}</li>
      ))}
    </ul>
  );
}

// *****************************************************************************

// Chamando uma função no onClick
// export default function App() {
//   [valor, função de alteração]
//   const [counter, setCounter] = useState(0);

//   function increment() {
//     setCounter(counter + 1);
//   }

//   return (
//     <div>
//       <h1>Contador: {counter}</h1>
//       <button onClick={increment}>Aumentar</button>
//     </div>
//   );
// }

// *****************************************************************************

// Chamando direto no onClick
// export default function App() {
//   [valor, função de alteração]
//   const [counter, setCounter] = useState(0);

//   return (
//     <div>
//       <h1>Contador: {counter}</h1>
//       <button onClick={() => setCounter(counter + 1)}>Aumentar</button>
//     </div>
//   );
// }

// *****************************************************************************

// Vários estados separados
// const [counter, setCounter] = useState(0);
// const [title, setTitle] = useState('RocketHooks');

// *****************************************************************************

// Vários estados no useState poderia ser um objeto mas não é o mais indicado,
// poderia então usar o useReducer
// const [data, setData] = useState({
//   counter: 0,
//   title: 'RocketHooks',
// });

// *****************************************************************************

// Usar o useReducer para vários estados
// import React, { useState, useReducer } from "react";

// function counter(state, action) {
//   switch (action.type) {
//     case "increment":
//       return { counter: state.counter + 1 };
//     case "decrement":
//       return { counter: state.counter - 1 };
//     default:
//       return state;
//   }
// }

// export default function App() {
//   const [state, dispatch] = useReducer(counter, { counter: 0 });

//   function increment() {
//     dispatch({ type: "increment" });
//   }

//   return (
//     <div>
//       <h1>Contador: {state.counter}</h1>
//       <button onClick={increment}>Aumentar</button>
//     </div>
//   );
// }

// *****************************************************************************

// Usar useEffect para substituir componentDidMount, componentDidUpdate
// e componentWillUnMount

// componentDidMount() {
//   document.title = this.state.counter;
// }

// componentDidUpdate(prevProps, prevState) {
//   if (prevState.counter !== this.state.counter) {
//     document.title = this.state.counter;
//   }
// }

// componentWillUnMount() {}

// *****************************************************************************

// useEffect(1 parâmetro): componentDidMount, componentDidUpdate

// useEffect(() => {
//   document.title = counter;
// });

// *****************************************************************************

// useEffect(2 parâmetros): componentDidMount, componentDidUpdate (comparação)

// useEffect(() => {
//   document.title = counter;
// }, [counter]);

// *****************************************************************************

// useEffect(1 parâmetro, retorno função): componentWillUnMount

// useEffect(() => {
//   document.title = counter;

//   return () => {

//   }
// }, [counter]);

// *****************************************************************************

// Pode ter vários useEffect, cada um com um retorno, agora se quiser apenas uma
// função de componentWillUnMount, use um useEffect vazio com retorno

// useEffect(() => {
//   return () => {
//     // componentWillUnMount
//   }
// })

// *****************************************************************************

// useEffect (2 parâmetros, array vazio): componentDidMount

// useEffect(() => {
//   const response = await fetch(
//     "https://api.github.com/users/osvaldokalvaitir/repos"
//   );
//   const responseData = await response.json();

//   setData(responseData);
// }, []);

// *****************************************************************************

// É recomendado usar cada useEffect para cada funcionalidade, ou seja,
// não é utilizado um pra didMount e outro pra WillUnMount, mas sim,
// um para cada estado, que neste caso seria o data e setData

// *****************************************************************************

// Plugin do ESLint para Hooks
// https://www.npmjs.com/package/eslint-plugin-react-hooks