import Image from 'next/image'
import './globals.css'
import {Header} from './header.js'
import {Footer} from './footer.js'
import {Form} from './form.js'
import {MovieRow} from './movie.js'

export default function Home() {
  return (
  <>
    <Header />
    <MovieRow />
    <div>
        <h3>Add New Movie</h3>
        <p>Fill this form with movie details</p>
        <img src="add.png" />
    </div>
    <Footer />
 < />
  );
}
