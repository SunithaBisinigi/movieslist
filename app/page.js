import './globals.css';
import './Form.css';
import {Header} from './header.js';
import {Footer} from './footer.js';
import {AddMovie} from './Addmovie.js';
import Rows from './Rows.js';
import {Form} from './form.js'
export default function Home() {
    return (
        <>
            <Header />
            <Rows />
            <AddMovie />
            <Form />
            <Footer />
        < />
    );
};
