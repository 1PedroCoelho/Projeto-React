import Item from './Item.js'
function List(){
 return(
    <>
        <h1>Minha lista</h1>
        <ul>
            <Item marca="Ferrari" />
            <Item marca="Fiat"/>
            <Item marca="Renault"/>
        </ul>
    </>
 )   
}
export default List