import CreateListItem from './CreateListItem'
const RenderList = (props)=>{
    let {list} = props

    return(
        <div className='containerTwo'>
            {list.map((item)=>{
                return <CreateListItem picture={item} key={item.name}/>
            })}
        </div>
    )
}
export default RenderList;