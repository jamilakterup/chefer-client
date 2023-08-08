import React from 'react';

const ExtraSection = () => {
    return (
        <div className="container mx-auto">
            <h2 className='text-5xl underline text-center mt-40 mb-20'>Popular Questions</h2>

            <div className="collapse bg-base-200 mt-20">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    What inspired the name "Chefer" for your restaurant?
                </div>
                <div className="collapse-content">
                    <p> The name "Chefer" was inspired by a fusion of "chef" and "offer." It signifies our commitment to providing exceptional culinary creations and a diverse range of offerings to our patrons. Our goal is to present a unique and elevated dining experience that showcases the skills of our talented chefs.</p>
                </div>
            </div>

            <div className="collapse bg-base-200 mt-2 mb-32">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    How does Chefer ensure a balance between innovation and tradition in its menu?
                </div>
                <div className="collapse-content">
                    At Chefer, we pride ourselves on striking a harmonious balance between innovation and tradition in our menu. Our chefs draw inspiration from classic culinary techniques while infusing creative twists to create dishes that surprise and delight our guests. We respect the roots of traditional cuisine while exploring new ingredients, flavors, and presentations, ensuring a dynamic dining experience that appeals to both adventurous palates and those seeking familiar comforts.
                </div>
            </div>



            <div className="stats shadow flex justify-center mb-32">

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Total Likes</div>
                    <div className="stat-value text-primary">25.6K</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Page Views</div>
                    <div className="stat-value text-secondary">2.6M</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                    </div>
                    <div className="stat-value">86%</div>
                    <div className="stat-title">Tasks done</div>
                    <div className="stat-desc text-secondary">31 tasks remaining</div>
                </div>

            </div>
        </div>

    );
};

export default ExtraSection;