import { useEffect } from "react";
import { fetchPhotos, fetchVideos, fetchGIF } from "../api/mediaApi.js";
import {
  setQuery,
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice.js";
import { useDispatch, useSelector } from "react-redux";
function ResultGrid() {
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search
  );

  useEffect(() => {
    const getData = async () => {
      let data;
      if (activeTab == "Photos") {
        data = await fetchPhotos(query);
        console.log(data);
      }
      if (activeTab == "Videos") {
        data = await fetchVideos(query);
        console.log(data);
      }
      if (activeTab == "GIF") {
        data = await fetchGIF(query);
        console.log(data);
      }
    };
    getData();
  }, [query, activeTab]);
  return <div></div>;
}

export default ResultGrid;
