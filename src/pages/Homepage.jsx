import './Homepage.css';
import { useRef } from 'react';
import Shop from './shop/shop';
import Cart  from './cart/cart.jsx';


const Homepage = () => {
  
  const linkRef = useRef(null);
  const goto = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className='Homepage'>
      <div className="container">
        <header>
          <h1>Ini adalah<br/>Kedai <span className='highlight'>Bali Djadoel.</span> Kami atasi laparmu</h1>
          <div className="btn-scrl" onClick={() => goto(linkRef.current)}>
            <p>Mulai belanja ↓</p>
          </div>
        </header>
        <section ref={linkRef}>
          <h1>Makanan kami</h1>
          <Shop/>
          <Cart />
        </section>
      </div>
    </div>
  )
}

export default Homepage;