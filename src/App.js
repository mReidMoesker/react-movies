import './css/index.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
    const galleryImages = [ 
    //found 'require' property online, forces images to be loaded without import
    require('./img/Bourne-poster.jpg'),
    require('./img/Terminator2-poster.jpg'),
    require('./img/Transformers-poster.jpg'),
    require('./img/Goldeneye-poster.jpg')
  ];

  return (
    <div className="App">
      <Header />
      <Banner
        title="Welcome to Crazy Movies!"
        text="The craziest movies we've ever seen"
        primaryBtnText="Learn more"
        secondaryBtnText="Contact support"
      />
      <Gallery images={galleryImages} />
      <Footer />
    </div>
  );
}

export default App;