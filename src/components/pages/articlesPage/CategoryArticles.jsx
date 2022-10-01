import { React, useState } from 'react'
import Navbar from '../../Navbar'
import Main from './Main';
import Footer from '../home/Footer';

const CategoryArticles = (props) => {

    const [category ] = useState(props.category);

    return (
        <>
        {console.log(props.category)}
            <Navbar />
            <Main category={category} />
            <Footer />
        </>
    )
}

export default CategoryArticles