// app/dashboard/layout.tsx
"use client"
import '../globals.css'; // Ensure global styles are applied
import React, { useState } from 'react';
import Sidenav from "@/app/components/Sidenav";
import Home from "@/app/components/Home";
import KatalogTanaman from "@/app/components/KatalogTanaman";
import Kegiatan from "@/app/components/Kegiatan";

export default function DashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode;
}) {
    const [selectedComponent, setSelectedComponent] = useState<string>('Home');

    const renderComponent = () => {
        switch (selectedComponent) {
            case 'Home':
                return <Home />;
            case 'KatalogTanaman':
                return <KatalogTanaman />;
            case 'Kegiatan':
                return <Kegiatan />;
            default:
                return <Home />;
        }
    };

    return (
                <div className="flex">
            {/* Sidebar */}
                    <Sidenav selectedComponent={selectedComponent} setSelectedComponent={setSelectedComponent} />

            {/* Main Content */}
                    <main className="flex-1 p-6">
                        {renderComponent()}
                    </main>
                 </div>
    );
}
