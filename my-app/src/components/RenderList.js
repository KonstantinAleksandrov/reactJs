import CreateListItem from './CreateListItem'
import {useLazy} from '../lazyHook'
import {useState, useMemo, useCallback} from "react";

const RenderList = (props)=>{
    let {list} = props
    const [lazyToggle, setToggle] = useLazy(1000000000)
    console.log(lazyToggle)
    // const fastToggle = useMemo(() => lazyToggle(), [lazyToggle() % 10 === 0])
    const handleSetToggle = useCallback(() => setToggle(prev => prev + 1), [])

    return(
        <div className='containerTwo'>
            {list.map((item)=> {
                return <CreateListItem picture={item} key={item.name} setToggle={handleSetToggle}/>
            })}

            <main>{lazyToggle}</main>
        </div>
    )
}
export default RenderList;