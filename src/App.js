import './App.css';
import Card from './Components/Card'

function App() {
  return (
    <>
    <Card img='https://get.wallhere.com/photo/3840x2160-px-mountain-1327909.jpg'>        
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </Card>
    <Card>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </Card>
    </>
  );
}

export default App;