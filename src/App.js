import "./App.css";
import Text from "./Text";

function App() {
  return (
    <div className="App">
      <Text text="Regular text" />
      <Text text="Huge header" fontSize='32' />
      <Text text="Danger notification" textColor='red' />
      <Text text="Underlined text" fontSize='22' underline />
    </div>
  );
}

export default App;