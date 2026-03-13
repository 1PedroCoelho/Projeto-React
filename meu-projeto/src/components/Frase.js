import estilo from './Frase.module.css'
function Frase() {
    return (
        <div className={estilo.fraseContainer}>
            <p className={estilo.fraseContent}>Esse compotente tem uma frase</p>
        </div>
    )
}
export default Frase;