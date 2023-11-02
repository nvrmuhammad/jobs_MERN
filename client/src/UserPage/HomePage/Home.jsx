import Navbar from '../../Components/Navbar/Navbar'
import './Home.css'

const Home = () => {
  return (
    <section id='Home'>
      <Navbar />

      <div className='main__home'>
        <p>
          Welcome to <span className='logo__span'>inWork</span> web site , you
          can find you job <span className='smile__span'>:)</span>
        </p>
      </div>
    </section>
  )
}
export default Home
