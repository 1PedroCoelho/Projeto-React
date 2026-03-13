import Item from './Item.js'
function List(){
 return(
    <>
        <h1>Minha lista</h1>
        <ul>
            <Item marca="Ferrari" ano_lancamento={2000} />
            <Item marca="Fiat"  ano_lancamento={1995}/>
            <Item marca="Renault"  ano_lancamento={2012}/>
            <Item />
            
        </ul>
    </>
 )   
}
export default List