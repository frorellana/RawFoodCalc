import React from "react";
/*
Product card will have the following:
name,
image,

*/
export default function ProductCard({name = 'Product', path = '/static/images/chickenLiver.png', desc='Description of product.', animal}) {   
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

    <div className="col">
      <div className="card h-100">
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{desc}</p>
            <a href="#" class="btn btn-primary stretched-link">Add</a>
        </div>
        <img className="card-img-bottom" src={path}/>
      </div>
    </div>
  );
}