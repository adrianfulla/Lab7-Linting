import './Buscador.css'
import { useState } from 'react'

const SabeMas = ()=>{
        return(
            <div className='saberMas'>
                <div className='pico'></div>
                <div className='cuadradito'>
                    <span>
                    Aprenda mas
                    </span>
                    
                </div>
            </div>
        )
    
}

const Logo =()=>{
    const[sobre, setSobre] = useState(false)

    return(
    <div className="Logazo"
    onMouseEnter={()=>setSobre(true)}
    onMouseLeave={()=>setSobre(false)}>
        <a href='https://duckduckgo.com/about' className='linked'>  
            <span className='vacio'></span>  
            <img src="https://duckduckgo.com/assets/logo_homepage.alt.v108.svg" alt="" className='imagen'/>
            <span className='hello'>
                <div className= {`elemento ${sobre ? 'mostrar' : ''}`}>
                    <SabeMas>
                    </SabeMas>
                </div>
            </span>
            
        </a>
        
    </div >)
}

const ButtonSearch = ()=>{
    return(
        <button className='searchButton'>
            {/* eslint-disable-next-line max-len */}
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" viewBox="0 0 24 24" width="24" height="24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
        </svg>
        </button>
    )
}

const InputSearch = () =>{

    return(
        <div className='contenedorBusca'>
            <input type="text" className='inputTosearch' placeholder='Busca en la red sin que te rastreen'/>
            <ButtonSearch></ButtonSearch>
        </div>

    )
}


const Buscador = () => {
    return (
        <div className='buscadorOrdenador'>
            <Logo/>
            <InputSearch/>
        </div>
      
    )
  }
  
  export default Buscador