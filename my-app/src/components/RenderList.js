import CreateListItem from './CreateListItem'
const RenderList = (props)=>{
    let {list} = props

    return(
        <div className='containerTwo'>
            {list.map((item)=>{
                return <CreateListItem picture={item} key={item.name}/>
            })}
            {/*<CreateListItem picture={list[0].item}/>*/}
            {/*<CreateListItem picture={list[1].item}/>*/}
        </div>
    )
}
export default RenderList;