import React from "react";
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';

import Header from "../Header/Header";
import Sidebar from "../SideBar/Sidebar";
import Main from "../Main/Main";
import SideContent from "../SideContent/SideContent";
import './Home.css'

export default function Home() {
    return (
        <div className='home'>
            <StyledEngineProvider injectFirst>
                <CssVarsProvider>
                    <Header />
                    <div className="container-fluid">
                        <div className="row mx-2">
                            <div className="col-2 p-0 fh sidebar">
                                <Sidebar />
                            </div>
                            <div className="col-7 p-0 fh main">
                                <Main />
                            </div>
                            <div className="col-3 p-0 fh subcontent">
                                <SideContent />
                            </div>
                        </div>
                    </div>
                </CssVarsProvider>
            </StyledEngineProvider>
        </div>
    );
}