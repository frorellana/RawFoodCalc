import React, {useState, useEffect} from 'react';
import ProductCard from '../components/ProductCard';


export default function AvaiableIngridents() {
  const [animals, setAnimals] = useState([]);
  const [images, setImages] = useState([]);
  function formatWord(word) {
    word = word.toLowerCase()
    const arr = word.split(' ');
    for(let i = 0; i < arr.length; i++ ){
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return arr.join(' ');  
  }

  useEffect(() => {
    // Fetch data from Django API
    // Fetch information from database
    // Only display if fetching is successful
    // Sample
  
    fetchImages()
    fetch('/api/animalPartRatio')  // Update the URL based on your API endpoint
    .then(response => response.json())
    .then(data => {
      // For data set returned, create a section for organs and non organs
      // filter animals who have data in the ratios
          data.forEach((animal) => {
          animal.organs = []
          animal.nonOrgans = []
          animal.ratios.forEach((item) => {
            if(item.organ ===  1) {
              animal.organs.push(item);
            } else {
              animal.nonOrgans.push(item);
            }
          })
        });
        return setAnimals(data)})
      .catch(error => console.error('Error fetching data:', error));
  }, []);

function fetchImages(animal_id, part_id) {
  fetch('/api/images')  // Update the URL based on your API endpoint
    .then(response => response.json())
    .then(data => setImages(data))
}
  


 return(
  <div className='container'>
    {animals.filter(item => item.ratios.length > 0).map(animal => (
      <div className='container'>
        <h2 key={animal.id}>{formatWord(animal.name)}</h2>
          <section className='partSection'>
            <h3>Organs</h3>
              {/* list of organs for this product */}
              <div className="container">
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                  {animal.organs.map(item => 
                  <ProductCard 
                    name={formatWord(item.part)} 
                    desc={`meat/bone/organ: ${item.meat}/${item.bone}/${item.organ}`} 
                    animal={formatWord(animal.name)}
                    />)}
                </div>
              </div>
            </section>

            <section className='partSection'>
            <h3>Cuts</h3>
            <div className="container">
                <div className='row row-cols-1 row-cols-md-3 g-4 ms-auto'>
                  {animal.nonOrgans.map(item => 
                  <ProductCard 
                    name={formatWord(item.part)} 
                    desc={`meat/bone/organ: ${item.meat}/${item.bone}/${item.organ}`} 
                    animal={formatWord(animal.name)}/>)}
                  
                </div>
              </div>
            </section>

      </div>
      
    ))}
      
   
  </div>
  
 );
}