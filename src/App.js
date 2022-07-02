import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.css' 
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavBar from './Components/NavBar.jsx';
import './App.css';
import ItemListContainer from './Components/ItemListContainer.jsx';


function App() {
  return (
   <>
      <NavBar />
      <ItemListContainer img="https://armonicos.cl/3180-large_default/harley-benton-dc-ltd-gotoh-daphne-blue.jpg" 
      title="Guitarra Harley Benton Daphne Blue"
      content="The familiar curves of HB's SC and DC models come in a wide variety of specs but, on paper at least, the latest Deluxe series versions of its new Gotoh models might be the brand's strongest statement to date for value. "
      class="animate__fadeInLeftBig"
      price= "35666"
      />
  </>
  );
}

export default App;
