import logo from './logo.svg';
import './App.css';
import Scatter3DPlot from './components/plotly/Plotly';
import data from './data.json'


function App() {
//  console.log(data)
//  console.log('x')
//  console.log(data.data.env_space.points_inside)
//  console.log('xx')
//  console.log(data.data.env_space.points_inside.x)
  return (
    <div className="App">
      <Scatter3DPlot points_inside={data.data.env_space.points_inside} points_outside={data.data.env_space.points_outside}></Scatter3DPlot>
    </div>
  );
}

export default App;
