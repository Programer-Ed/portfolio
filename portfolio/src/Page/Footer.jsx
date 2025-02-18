// import Socials from '../components/Socials'

function Footer() {
    const currentYear = new Date().getFullYear();
    return ( 
        <footer>
            <p>&copy; {currentYear} Edwin Ng'ang'a </p>
            {/* <Socials /> */}
        </footer>
     );
}

export default Footer;