import React from "react";
import SampleSelector from "./sampleSelector";
import PresetStyleSelector from "./modelSelector";
import BackgroundSelector from "./backgroundSelector";

const ToolBar = () =>{
    return(
    <div className='d-flex flex-row tool-bar'>
        <SampleSelector />
        <PresetStyleSelector />
        <BackgroundSelector />
    </div>
    )};

export default ToolBar;