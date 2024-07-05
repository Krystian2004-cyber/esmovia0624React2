
import "./CInput.css"

function CInput ({type, name, placeholder, design, emitFunction, errorCheck,defaultValue}) {

    return(
        <input 
            type={type}
            name={name}
            placeholder={placeholder}
            className={design}
            onChange={(e)=>emitFunction(e)}
            onBlur={(e)=>errorCheck(e)}
            defaultValue={defaultValue}
        />
    )
}

export default CInput