import React from 'react';

const Recipe = ({recipe}) => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl my-12">
            <figure><img className='h-[300px] w-[500px]' src={recipe.image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{recipe.name}</h2>
                <p>Ratings: {recipe.rating}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default Recipe;