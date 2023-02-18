import React from 'react';
import Categories from '../Categories/Categories';
import Companies from '../Companies/Companies';
import Experiencedjobs from '../Experiencedjobs/Experiencedjobs';
import Fresherjobs from '../Fresherjobs/Fresherjobs';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Services from '../Services/Services';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Search></Search>
            <Services></Services>
            <Categories></Categories>
            <Fresherjobs></Fresherjobs>
            <Experiencedjobs></Experiencedjobs>
            <Companies></Companies>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;