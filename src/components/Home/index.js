import Header from '../Header'
import LogoutButton from '../LogoutButton'
// Write your JS code here
import './index.css'

const Home = () => (
  <>
    <div className="home-container">
      <Header />
      <h1>Home Route</h1>
      <LogoutButton />
    </div>
  </>
)

export default Home
