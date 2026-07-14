const STORAGE_KEY = "workshopList" //por convención al ser una constante de configuración usa SCREAMING_NAKE_CASE
//fuente: https://www.flino.dev/blog/09-convenciones-codigo-case/ 

export function getWorkshops() {
     return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
}

export function saveWorkshop(formData, editIndex) {
    const existente = getWorkshops()
    
    if(editIndex != null){
        const actualizado = existente.map((item, i) => i === editIndex ? formData : item)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(actualizado))
    }else{
        existente.push(formData)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(existente))
    }
}

export function deleteWorkshop(indexToDelete){
    const actualizado = getWorkshops().filter((item, i) => i != indexToDelete)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(actualizado))
    
    return actualizado
}