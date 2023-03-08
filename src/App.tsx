import { Component, createSignal } from 'solid-js';

const App: Component = () => {
  const [getCount, setCount] = createSignal<number>(0);

  console.log('render')

  return (
    <>
      <h1>Nuestro contador</h1>
      <p>{getCount()}</p>
      <p>{getCount() % 2 === 0 ? 'es par' : 'es impar'}</p>
      <button onClick={() => setCount((count) => count + 1)}>
        Incrementar
      </button>
    </>
  );
};

export default App;
