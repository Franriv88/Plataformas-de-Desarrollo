//Este es mi botón de base para todos los demás.
//Recibe una etiqueta, una función onClick y una clase, para personalizar los botones en caso que no quiera que luzca igual que el botón base.

const ButtonBase = ({ children, label, onClick, className, disabled, type = "button" }) => {
    return (
        <button 
            type={type}        
            className={`btn-base ${className}`} 
            onClick={onClick} 
            disabled={disabled}
        >
            {children}
            {label}
        </button>
    );
};

export default ButtonBase

//Obs: podrías haber usado el Spread Operator {...props} para pasar todas las props sin tener que escribir una por una. Pero esto por ahora me parece más entendible  ""