import Header from './components/Header'
import SideMenu from './components/SideMenu'
import Home from './page/Home'
import Footer from './components/Footer'

function App() {
  return (
    <div className="site-containe">
      <Header />
      <div className="container">
        <div className="row main-row">
          <SideMenu />
          <div className="col-xxl-9 col-xl-9 col-lg-12" data-bs-spy="scroll">
            <Home />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App