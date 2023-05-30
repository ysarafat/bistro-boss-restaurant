import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import bgImg from '../../../assets/shop/banner2.jpg';
import useMenu from '../../../hooks/useMenu';
import Cover from '../../Shared/Cover/Cover';
import OrderTab from '../OrderTab/OrderTab';

function Order() {
    const catagories = ['dessert', 'soup', 'salad', 'pizza', 'drinks'];
    const { category } = useParams();
    const initialIndex = catagories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const drinks = menu.filter((items) => items.category === 'drinks');
    const soup = menu.filter((items) => items.category === 'soup');
    const salad = menu.filter((items) => items.category === 'salad');
    const pizza = menu.filter((items) => items.category === 'pizza');
    const dessert = menu.filter((items) => items.category === 'dessert');
    return (
        <div>
            <div className="mb-20">
                <Cover bgImg={bgImg} title="our shop" subTitle="Would you like to try a dish?" />
            </div>
            <div className="max-w-screen-xl mx-auto px-4 mt-20">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Dessert</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>

                    <TabPanel>
                        <OrderTab items={dessert} />
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soup} />
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={salad} />
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizza} />
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={drinks} />
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
}

export default Order;
