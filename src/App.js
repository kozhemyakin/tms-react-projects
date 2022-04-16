import "./App.css";
import Text from "./Text";
import Box from "./Box";

function App() {
  return (
    // <div className="App">
    //   <Text text="Regular text" />
    //   <Text text="Huge header" fontSize='32' />
    //   <Text text="Danger notification" textColor='red' />
    //   <Text text="Underlined text" fontSize='22' underline />
    // </div>

    <div className='boxes'>
      <Box cssStyle='big' label='BIG' />
      <Box cssStyle='medium' label='MEDIUM' />
      <Box cssStyle='small' label='SMALL' />
    </div>
  );
}

export default App;