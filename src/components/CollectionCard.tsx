
import {useDispatch} from 'react-redux'
import {removeCollection} from '../redux/features/collectionSlice'
function CollectionCard({item}) {
  const dispatch = useDispatch()
  const handleRemove=(item)=>{
    dispatch(removeCollection(item.id))
  }
  return (
    <div className="relative w-[23vw] h-80 bg-white rounded-xl overflow-hidden">
      <a href={item.url} target="_blank" className="h-full !z-3">
        {item.type == "photo" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
          />
        ) : (
          ""
        )}
        {item.type == "video" ? (
          <video
            className="h-full w-full object-cover object-center"
            autoPlay
            loop
            muted
            src={item.src}
          ></video>
        ) : (
          ""
        )}
        {item.type == "gif" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
          />
        ) : (
          ""
        )}
      </a>
      <div
        className="flex justify-between gap-3 items-center w-full py-5 px-4 text-white absolute bottom-0 !z-20"
        id="bottom"
      >
        <h2 className="text-lg font-semibold capitalize h-20 overflow-hidden">
          {item.title}
        </h2>
        <button className="bg-red-600 text-white rounded px-3 py-2 font-medium cursor-pointer active:scale-95 z-10" onClick={()=>{
          handleRemove(item)}}>
          Remove
        </button>
      </div>
    </div>
  )
}

export default CollectionCard
