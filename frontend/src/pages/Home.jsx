import { Header } from '../components/Header.jsx'
import {Nav} from '../components/Nav.jsx'
import { Aside } from '../components/Aside.jsx'
import { FyP } from '../components/FyP.jsx'
import { Newpost } from '../components/Newpost.jsx'

export function Home(){
  return(
      <>
        <Header/>
        <Nav/>
        <Aside/>
        <FyP/>
        
      </>
  )
}

