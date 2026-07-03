import ButtonBase from './ButtonBase.jsx' //improto mi botón base y acá modifico lo que quiera para el botón contador, como la etiqueta y la función onClick, además de agregarle una clase para personalizarlo.
import '../Buttons/button.css'

const ButtonCounter = ({count, handleAdd, handleSubtract}) => {

    return (
        <div className='button-counter'>
            <ButtonBase label="+" onClick={handleAdd} className="button__add"/>
            <span>{count}</span>
            <ButtonBase label="-" onClick={handleSubtract} className="button__subtract" disabled={count===0}/>
        </div>
    )
}

export default ButtonCounter