import React from "react";
/*
Product card will have the following:
name,
image,

*/
export default function ProductCard({name = 'Product', image = '/static/images/blank.png', desc='Description of product.', animal}) {   
  function selectOnClick() {
    console.log(animal, name);
  }
  return(
    
    // <div className='productCard' onClick={selectOnClick}>
    //   <section id='cardText'>
    //     <strong>{name}</strong>
    //     <p>{desc}</p>
    //   </section>
    //   <img src={image} />
      
    // </div>

    <div className="col-2">
      <div className="card">
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{desc}</p>
        </div>
        <img src={image}/>
      </div>
    </div>
  );
}