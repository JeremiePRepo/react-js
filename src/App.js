import React, { Component } from 'react';
import Movie from './components/Movie';
import rawPoster from './images/raw.png';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      moviesData : [
      {
          titre: "Grave",
          annee: 2017,
          posters: [
            rawPoster,
            'http://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2018-04/grave2.jpg',
            'http://fr.web.img4.acsta.net/videothumbnails/16/05/13/14/44/158851.jpg',
            'https://www.journaldugeek.com/wp-content/blogs.dir/1/files/2017/03/grave10.jpg',
          ]
      },
      {
          titre: "The strangers",
          annee: 2018,
          posters: [
            "http://fr.web.img2.acsta.net/c_215_290/pictures/16/05/03/10/18/265733.jpg",
            "https://www.horreur.net/sites/default/files/upload/thestrangers2016p2.jpg",
            "https://p0.storage.canalblog.com/00/76/110219/112887058_o.png",
            "https://lecinemasurlesofa.files.wordpress.com/2016/05/fullsizephoto715384.jpg",
          ]
      },
      {
          titre: "Fight Club",
          annee: 2001,
          posters: [
            "https://i.pinimg.com/originals/fd/5e/66/fd5e662dce1a3a8cd192a5952fa64f02.jpg",
          ]
      },
      {
          titre: "Dernier Train pour Busan",
          annee: 2017,
          posters: [
            "https://static.films-horreur.com/1970/01/rY7oyGzIY4f4AQlD11wfx5zFLtB.jpg",
            "https://i.ytimg.com/vi/V9Zg3F5EEjQ/maxresdefault.jpg",
          ]
      },
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.moviesData.map((movie, index) => {
          return (
            <Movie 
              key={index} 
              titre={movie.titre} 
              annee={movie.annee} 
              description="Bla bli blo" 
              src={movie.posters} 
              alt="Alt text"
            />
          );
        }
        )}
      </div>
    );
  }
}

export default App;
