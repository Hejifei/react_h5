import React from "react"
import {Routes, Route,} from "react-router-dom"

const Home = React.lazy(() => import("@/view/home/index"));
const App = React.lazy(() => import("@/view/app/index"));
const DownloadList = React.lazy(() => import("@/view/download_list/index"));
const SelectModel = React.lazy(() => import("@/view/select_model/index"));
const ModelDetail = React.lazy(() => import("@/view/model_detail/index"));

export default (
  <Routes>
    <Route path="/" element={<DownloadList />} />
    <Route path="/home" element={<Home />} />
    <Route path="/app" element={<App />} />
    <Route path="/select_model" element={<SelectModel />} />
    <Route path="/model_detail/:id" element={<ModelDetail />} />
  </Routes>
)
