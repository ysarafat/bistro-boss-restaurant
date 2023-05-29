import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import bgImg from '../../../assets/menu/banner3.jpg';
import useMenu from '../../../hooks/useMenu';
import Cover from '../../Shared/Cover/Cover';
import MenuCategory from '../MenuCategory/MenuCategory';

function Menu() {
    const [menu] = useMenu();
    const offered = menu.filter((items) => items.category === 'offered');
    const soup = menu.filter((items) => items.category === 'soup');
    const salad = menu.filter((items) => items.category === 'salad');
    const pizza = menu.filter((items) => items.category === 'pizza');
    const dessert = menu.filter((items) => items.category === 'dessert');

    return (
        <section>
            <div className="mb-20">
                <Cover bgImg={bgImg} title="our menu" subTitle="Would you like to try a dish?" />

                <div className="mt-20 mb-16">
                    <SectionTitle title="today's offer" subTitle="don't miss" />
                </div>

                <div className="max-w-screen-xl mx-auto px-4">
                    <MenuCategory title="" items={offered} />
                </div>
                <div className="space-y-16 mt-20">
                    <Cover bgImg={bgImg} title="dessert" subTitle="Would you like to try a dish?" />
                    <div className="max-w-screen-xl mx-auto px-4">
                        <MenuCategory title="dessert" items={dessert} />
                    </div>
                </div>
                <div className="space-y-16 mt-20">
                    <Cover bgImg={bgImg} title="soup" subTitle="Would you like to try a dish?" />
                    <div className="max-w-screen-xl mx-auto px-4">
                        <MenuCategory title="soup" items={soup} />
                    </div>
                </div>
                <div className="space-y-16 mt-20">
                    <Cover bgImg={bgImg} title="Pizza" subTitle="Would you like to try a dish?" />
                    <div className="max-w-screen-xl mx-auto px-4">
                        <MenuCategory title="pizza" items={pizza} />
                    </div>
                </div>
                <div className="space-y-16 mt-20">
                    <Cover bgImg={bgImg} title="Salad" subTitle="Would you like to try a dish?" />
                    <div className="max-w-screen-xl mx-auto px-4">
                        <MenuCategory title="salad" items={salad} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Menu;
