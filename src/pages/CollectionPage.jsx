import { useSelector } from "react-redux"
import CollectionCard from "../components/CollectionCard"
const CollectionPage = () => {
    const collection = useSelector(state=>state.collection.items)
    if(collection){
        console.log("Hello collection")
        console.log(collection)
    }
    return (
        <div>
            {collection.map((item,idx)=>{
                return <div key={idx}><CollectionCard item={item}/></div> 
            }
                )
                }
        </div>
    )
}

export default CollectionPage;