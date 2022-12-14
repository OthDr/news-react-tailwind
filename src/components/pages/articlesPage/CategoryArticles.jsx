import { React} from 'react'
import Navbar from '../../Navbar'
import Main from './Main';
import Footer from '../home/Footer';

const CategoryArticles = (props) => {

    return (
        <>
        {console.log(props.category)}
            <Navbar selectedCategory={props.category}/>
            <Main category={props.category} />
            <Footer />
        </>
    )
}

export default CategoryArticles