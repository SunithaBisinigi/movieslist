import Image from 'next/image'
import './globals.css'
import {Header} from './header.js'
import {Footer} from './footer.js'
import {Data} from './data.js'
//import {MovieRow} from './movie_row.js'
import {AddMovie} from './Addmovie.js'
import {Rows} from './Rows.js'

export default function Home() {
  return (
            <>
                <Header />
                <Rows />
                <AddMovie />
                <Footer />
            < />
);
}
