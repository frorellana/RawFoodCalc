import React, {useState, useEffect} from 'react';
import ProductCard from '../components/ProductCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCat } from '@fortawesome/free-solid-svg-icons'



export default function AvaiableIngredients({handleNewSelections, handleIncItems}) {
  const [animals, setAnimals] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setAnimals(result);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

 if(loading) {
  return(
    <div id='loadingContainer'>
      <FontAwesomeIcon icon={faCat} beatFade size="xl" style={{color: "#a55f84",}} />
    </div>
  )
 } else {

   return(
     <div className='container'>
       {animals.map(animal => (
         <div className='container'>
           <h4 key={animal.id}>{formatWord(animal.name)}</h4>
             <section className='partSection'>
               <h5>Organs</h5>
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
               <h5>Cuts</h5>
               <div className="container">
                   <div className='row row-cols-1 row-cols-md-3 g-4'>
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
  
       </div>)
       )}
     </div>
   );
 }
}
