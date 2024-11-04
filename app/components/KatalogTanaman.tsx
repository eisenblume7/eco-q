"use client"
import React from 'react';
import PlantCatalog from "@/app/components/PlantCatalog";

const KatalogTanaman: React.FC = () => {
    return (
        <div>
            <h1 className="text-4xl text-left ml-6 mt-14 font-bold">Katalog Tanaman</h1>
            <div>
                <PlantCatalog/>
            </div>
        </div>
    );
};

export default KatalogTanaman;
