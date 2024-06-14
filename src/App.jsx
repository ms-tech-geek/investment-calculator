import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />
      <div id="user-input">
        <label>Initial Investment</label>
        <input type="number" />
        <label>Annual Investment</label>
        <input type="number" />
        <label>Expected Returns</label>
        <input type="number" />
        <label>Duration</label>
        <input type="number" />
      </div>
    </>
  );
};

export default App;
