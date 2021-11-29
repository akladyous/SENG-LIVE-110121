// https://semantic-ui.com/
import 'semantic-ui-css/semantic.min.css';

// import all data from "painting_data.js"
import paintingsData from './paintings_data'

// import useState Hook
import { useState } from 'react';

// Component Imports
import NavBar from './components/NavBar';
import PaintingsList from './components/PaintingsList';
import PaintingForm from './components/PaintingForm'

function App() {

  // Initialize "color", "paintings", and "formView" states
  const [color, colorSetter] = useState("red");
  const [paintings, paintingsSetter] = useState(paintingsData);
  const [formView, formViewSetter] = useState(false);

  // Create function to change Parent's "color" state (changeColor)
  // ...

  // Breakout Activity #1: Create Function to Toggle Between PaintingForm / PaintingsList (toggleForm)
  // ...

  return (
    <div>
      <NavBar
        color={color}
        title="Paintr"
        icon="paint brush"
        description="an app we made"

        // Pass changeColor() as prop to NavBar
        // ...
      />

      {/* Add toggleForm click behavior */}
      <button className="ui button">Show/Hide New Painting Form</button>
      <hr />

      {/* Breakout Activity #1: Render PaintingForm or PaintingsList Components based upon toggleForm */}
      {/* ... */}
    
      <PaintingsList paintings={paintings} />
    </div>
  );
}

export default App;
