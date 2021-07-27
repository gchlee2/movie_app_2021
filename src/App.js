import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}) {
  return (
      <div>
        <h2>I like {name}</h2>
        <h4>{rating}/5.0</h4>
        <img src={picture} alt={name}/>
      </div>
    );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://www.aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Saamgyeopsal',
    image: 'https://w.namu.la/s/16c62517c7af89b2adc7f4841488292f142d5d99d8d9ea762b5fe757aa0cffd4fc71380f8a6179109683ec9419a66b77e999f949b18282e3e59e2b829fe7d70f72ca73ae8cdcc4434c8d77d9d78ff87b787cdf2d6e92f35dfc4a61fabfaac2c43ebc8ab698b0bb86a801472b003e5e32',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/220px-Dolsot-bibimbap.jpg',
    rating: 3,
  },
  {
    id: 4,
    name:'Doncasu',
    image: 'https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg',
    rating: 4,
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'https://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg',
    rating: 2,
  }
];

function App() {
  return(
    <div>
      {foodILike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;