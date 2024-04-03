import './App.css'
import SideBar from './SideBar'
import Header from './Header'
import MainPage from './MainPage'


function App() {

  return (
    <>
      <Header/>
      <div className='dashboard'>
        <SideBar/>
        <MainPage/>
      </div>
      
    </>
  )
}

export default App
