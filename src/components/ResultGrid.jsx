import { useEffect } from "react";
import { fetchPhotos, fetchVideos, fetchGIF } from "../api/mediaApi.js";
import ResultCard from "./ResultCard.jsx";
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
  const dispatch = useDispatch();
  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        dispatch(setLoading());
        let data = [];
        if (activeTab == "Photos") {
          data = await fetchPhotos(query);
          data = data.map((item) => ({
            id: item.id,
            title: item.alt_description,
            type: "photo",
            thumbnail: item.urls.small,
            src: item.urls.full,
            url: item.links.html,
          }));
          console.log(data);
        }
        if (activeTab == "Videos") {
          data = await fetchVideos(query);
          data = data.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name || "video",
            thumbnail: item.image,
            src: item.video_files[0].link,
            url: item.url,
          }));
          console.log(data);
        }
        if (activeTab == "GIF") {
          data = await fetchGIF(query);
          data = data.map((item) => ({
            id: item.id,
            type: "gif",
            title: item.title || "gif",
            thumbnail: item.media_formats.tinygif.url,
            src: item.media_formats.gif.url,
            url: item.url,
          }));
        }
        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err.message));
      }
    };
    getData();
  }, [query, activeTab]);
  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading</h1>;
  return (
    <div className="flex flex-wrap justify-center gap-6 overflow-auto px-10 w-full">
      {results.map((item, idx) => {
        return (
          <div key={idx}>
            <a href={item.url} target="_blank">
              <ResultCard item={item} />
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default ResultGrid;
