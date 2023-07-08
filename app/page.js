import Image from 'next/image'
import './globals.css'
import {Header} from './header.js'
import {Footer} from './footer.js'
import {MovieRow} from './movie_row.js'
export default function Home() {
  return (
            <>
                <Header />
                <Movie_row />
                <Footer />
            < />
);
}
