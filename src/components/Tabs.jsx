import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";
function Tabs() {
  const tabs = ["Photos", "GIF", "Videos"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);
  return (
    <div className="flex gap-10 p-10">
      {tabs.map((elem, idx) => (
        <button
          key={idx}
          className={`${
            activeTab == elem ? "bg-gray-800" : "bg-gray-600"
          } px-5 py-2 uppercase rounded cursor-pointer transition active:scale-95`}
          onClick={() => {
            dispatch(setActiveTabs(elem));
          }}
        >
          {elem}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
