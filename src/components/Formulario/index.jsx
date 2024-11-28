import { useState,  useEffect } from "react"

const Formulario = () =>{

    let [materiaA, setMateriaA ] =useState(0)
    let [materiaB, setMateriaB ] =useState(0)
    let [materiaC, setMateriaC ] =useState(0)
    let [nome, setNome] = useState('')
    
    useEffect(() =>{
        console.log('o componente iniciou')

        return () =>  {
            console.log('o componente finalizou')
        }
    },[])

    useEffect(()=>{
        console.log('o estado mudou', nome)
    },[nome])

    const alteraNome = (evento)  => {
       // console.log(evento.target.value)
        setNome(estadoAnterio => {
            console.log(estadoAnterio)
            return evento.target.value
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC
        const media = soma / 3

        if(media >7){
            return <p>VocÊ foi aprovado</p>
        }else{
            return  <p>Você não foi aprovado</p>
        }
    }


    return(
        <form action="">

            <ul>
                {[1,2,3,4,5].map(item => <li key={item}>{item}</li>)}

            </ul>

            <input type="text" placeholder="Seu nome" onChange={e => alteraNome(e)} />
            <input type="number" placeholder="Nota maxima A" onChange={({target}) => setMateriaA(parseInt(target.value))}/>
            <input type="number" placeholder="Nota maxima B" onChange={e => setMateriaB(parseInt(e.target.value))}/>
            <input type="number" placeholder="Nota maxima C" onChange={e => setMateriaC(parseInt(e.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario