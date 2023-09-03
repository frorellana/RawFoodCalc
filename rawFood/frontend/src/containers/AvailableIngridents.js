import React, {useState, useEffect} from 'react';
import ProductCard from '../components/ProductCard';


export default function AvaiableIngridents({handleNewSelections, handleIncItems}) {
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
  
   
    fetch('/api/animalPartRatio')  // Update the URL based on your API endpoint
    .then(response => response.json())
    .then(data => {
      // For data set returned, create a section for organs and non organs
      // filter animals who have data in the ratios
      const result = data.filter(animal => animal.parts.length > 0)
          console.log(data.filter(animal => animal.parts > 0))
          result.forEach((animal) => {
          animal.organs = []
          animal.nonOrgans = []
          animal.parts.forEach((item) => {
            if(item.ratio.organ ===  1) {
              animal.organs.push(item);
            } else {
              animal.nonOrgans.push(item);
            }
          })
        });
        console.log('data', result)
    
        return setAnimals(result)})
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  

 return(
  <div className='container'>
    {animals.map(animal => (
      <div className='container'>
        <h2 key={animal.id}>{formatWord(animal.name)}</h2>
          <section className='partSection'>
            <h3>Organs</h3>
              {/* list of organs for this product */}
              <div className="container">
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                  {animal.organs.map(part => 
                  <ProductCard 
                    part={formatWord(part.name)} 
                    ratio={part.ratio} 
                    animal={formatWord(animal.name)}
                    id={part.ratio.id}
                    handleNewSelections={handleNewSelections}
                    path={part.image_path? part.image_path : '/static/images/blank.png'}
                    handleIncItems={handleIncItems}
                    />)}
                </div>
              </div>
            </section>

            <section className='partSection'>
            <h3>Cuts</h3>
            <div className="container">
                <div className='row row-cols-1 row-cols-md-3 g-4 ms-auto'>
                  {animal.nonOrgans.map(part => 
                  <ProductCard 
                    part={formatWord(part.name)} 
                    ratio={part.ratio} 
                    animal={formatWord(animal.name)}
                    handleNewSelections={handleNewSelections}
                    id={part.ratio.id}
                    path={part.image_path? part.image_path : '/static/images/blank.png'}
                    handleIncItems={handleIncItems}
                    />)}
                  
                </div>
              </div>
            </section>

      </div>
      
    ))}
      
   
  </div>
  
 );
}