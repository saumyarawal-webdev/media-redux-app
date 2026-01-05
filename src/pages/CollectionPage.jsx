import { useSelector,useDispatch } from "react-redux"
import CollectionCard from "../components/CollectionCard"
import {clearCollection} from "../redux/features/collectionSlice"
const CollectionPage = () => {
    const collection = useSelector(state=>state.collection.items)
    const dispatch=useDispatch()
    return (
        <div className="overflow-auto px-10 py-3">
            <div className="flex justify-between mb-6">
                <h2 className="text-xl font-medium">{collection.length>0?'Your Collection':'Try adding something, there is nothing to show.'}</h2>
                
                {collection.length>0 && <button className="bg-red-600 px-5 py-2 text-base font-medium rounded active:scale-95 transition cursor-pointer" onClick={()=>{
                    dispatch(clearCollection())
                }}>Clear Collection</button>}
            </div>
            <div className='flex flex-wrap justify-center gap-6  w-full'>
            {collection.map((item,idx)=>{
                return <div key={idx}><CollectionCard item={item}/></div> 
            }
                )
                }
        </div>
        </div>
    )
}

export default CollectionPage;