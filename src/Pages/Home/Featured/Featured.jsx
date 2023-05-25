import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

function Featured() {
    return (
        <div>
            <div className="featured-item bg-fixed  text-white  my-20 py-20">
                <SectionTitle subTitle="check it out" title="Featured Item" color="text-white" />
                <div className="md:flex justify-center items-center  max-w-screen-xl mx-auto px-4  ">
                    <div>
                        <img src={featuredImg} alt="" />
                    </div>
                    <div className="md:ml-10">
                        <p className="text-2xl mb-2">Aug 20, 2029</p>
                        <p className="uppercase text-2xl mb-2 ">Where can i get some?</p>
                        <p className="text-xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
                            expedita hic dolorem, iusto vel suscipit nam excepturi debitis magnam
                            nostrum! Ut eum dignissimos culpa doloremque eligendi consectetur
                            blanditiis laboriosam fugiat ea quia similique quam nisi reprehenderit
                            numquam magnam nemo vitae cupiditate, atque maiores dicta minus
                            pariatur. Perspiciatis nobis vero quas?
                        </p>
                        <button className="text-xl px-5 py-2 rounded-lg border-b-4  hover:border-none mt-6 text-white hover:bg-white hover:text-black duration-300">
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Featured;
