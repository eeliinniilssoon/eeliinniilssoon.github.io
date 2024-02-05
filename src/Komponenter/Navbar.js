import React from 'react'
import { Link } from 'react-router-dom';
import styles from './CSS/NavbarFooter.css';

const Navbar = () => {
  return (
    <nav className={styles.links}>
      <Link id='Home' to="/"> 
        <h1>Elin Nilsson</h1>
      </Link>
      <div>
        <Link to="/Portfolio">Min Portfolie</Link>
        <Link to="/CV">Mitt CV</Link>
        <Link to="/OmMig">Kontaktinformation</Link>
      </div>
    </nav>
  );
};console.log(
  '%c Hallå där! 👋 Letade du efter något spännande? 🕵️‍♂️',
  'color: #969; font-size: 16px; font-weight: bold;'
);
console.log(
  '%c Well, du hittade det! 🎉 Njut av ditt besök och sluta aldrig att leta efter nya äventyr i vardagen!',
  'color: #369; font-size: 16px; font-weight: bold;'
);
export default Navbar