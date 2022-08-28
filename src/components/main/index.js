import './style.css'
import Advertising from './../advertising/index';
import Weather from '../weather';
import Map from '../map';
import Visited from '../visited';
import TvProgram from '../tv-program';
import Ether from '../ether';

export default function Main() {
  return (
    <main className="main">
      <Advertising/>
      <section className='section'>
        <div className="section__wrap">
         <Weather/> 
         <Map/>
         <Visited/>
         <TvProgram/>
        </div>
        <Ether/>
      </section>
    </main>
  )
}