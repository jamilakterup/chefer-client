import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <section>
            <h1 className='text-4xl m-8'>Q1: <span> Difference between controlled and uncontrolled component</span></h1>

            <div className="container mx-auto">
                <table className="table w-75 mx-auto">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Controlled</th>
                            <th>Uncontrolled</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>It does not maintain its internal state.</td>
                            <td>It maintains its internal states.</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Here, data is controlled by the parent component.</td>
                            <td>Here, data is controlled by the DOM itself.</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>It has better control over the form elements and data.</td>
                            <td>It has limited control over the form elements and data.</td>
                        </tr>
                        {/* row 4 */}
                        <tr>
                            <th>4</th>
                            <td>It accepts its current value as a prop.</td>
                            <td>It uses a ref for their current values.</td>
                        </tr>
                        {/* row 5 */}
                        <tr>
                            <th>5</th>
                            <td>It allows validation control.</td>
                            <td>It does not allow validation control.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Blogs;