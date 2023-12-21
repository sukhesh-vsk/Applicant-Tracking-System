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
            {/* <Test/> */}
            <StyledEngineProvider injectFirst>
                <CssVarsProvider>
                    <Header />
                 
                    <section style={{ display: 'flex',  minHeight: '100vh' }} className="flex-container">
                        <div style={{ width: '250px', position: 'relative'}} className="flex-item">
                            <Sidebar />
                        </div>
                        <div style={{ flex: 1, position: 'relative'}} className="flex-item">
                            <Main />
                        </div>
                        <div style={{ width: '200px'}} className="flex-item">
                            <SideContent />
                        </div>
                    </section>
                </CssVarsProvider>
            </StyledEngineProvider>
        </div>
    );
}
