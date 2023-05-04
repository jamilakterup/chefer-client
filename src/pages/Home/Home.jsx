import React, {useEffect, useState} from 'react';
import ChefData from '../ChefData/ChefData';

const Home = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])

    return (
        <section>
            <h2 className='text-5xl underline text-center mt-40 mb-20'>Our experienced chefs</h2>
            <div className='grid md:grid-cols-3 gap-12 container mx-auto'>
                {
                    chefs.map(chef => <ChefData
                        key={chef.id}
                        chef={chef}
                    />)
                }
            </div>
        </section>
    );
};

export default Home;