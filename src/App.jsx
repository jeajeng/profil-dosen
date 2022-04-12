import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Nav from './components/Nav'
import Card from './components/Card'
import Form from './components/Form'
import Footer from './components/footer'


const dataDosen =[
  {
    image:"data:image/jpeg;base64,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",
    title:"Ir. H. Moch Najib, MM",
    nidn: "0720076202",
    noTelp:"0823456764"
  },
  {
    image:"/public/iman.webp",
    title:"Iman Santoso, SE, MM",
    nidn: "0710127402",
    noTelp:"0817544955"
  },
  {
    image:"/public/khairul.webp",
    title:"H. Chairul Anam, S.Kom, MM",
    nidn: "0730076801",
    noTelp:"087755611777"
  },
  {
    image:"/public/hadiq.jpg",
    title:"Hadiq, ST, M.Kom",
    nidn: "0713077804",
    noTelp:"08233482010"
  },
  {
    image:"/public/yulian.jpg",
    title:"Dwi Yulian R.L., S.Kom, M.Kom",
    nidn: "0713078001",
    noTelp:"081330692838"
  },
  {
    image:"/public/yulian.jpg",
    title:"Rachman Yulianto, S.Kom, M.Kom",
    nidn: "0711077704",
    noTelp:"087857333604"
  },
  {
    image:"/public/madi.jpg",
    title:"Nur Ahmadi Indartono ST, M.Kom",
    nidn: "0724107301",
    noTelp:"	085334269309"
  },
  {
    image:"/public/jun.jpg",
    title:"Djuniharto, SE, S.Kom, M.Kom",
    nidn: "0726067101",
    noTelp:"0818356202"
  },
  
  
  
  
]
function App() {
  const [count, setCount] = useState(0)



  return (
    <div className=' '>

      <Nav />
      <div className='container'>
        <Form/>
      </div>
      <div className="container">
        <div className="row">
          {dataDosen.map((agt, indeks) => (
            <div className="col-lg-3 col-md-4 col-sm-6">
              <Card image={agt.image} title={agt.title} nidn={agt.nidn} noTelp={agt.noTelp}/>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App
