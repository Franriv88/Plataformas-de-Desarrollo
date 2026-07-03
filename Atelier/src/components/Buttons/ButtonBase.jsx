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

//Obs: podría haber usado el Spread Operator que pregunté en clase {...props} para pasar todas las props sin tener que escribir una por una. Pero esto por ahora me parece más entendible en este caso