import './globals.css';
import {Data} from './data.js';
import {Header} from './header.js';
import {Footer} from './footer.js';
import {AddMovie} from './Addmovie.js';
import Rows from './Rows.js';
export default function Home() {
    return (
        <>
            <Header />
            <Rows />
            <AddMovie />
            <Footer />
        < />
    );
};
