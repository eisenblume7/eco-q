"use client"
import React, {useState} from 'react';
import AddPlantForm from "@/app/components/AddPlantForm";

type Plant = {
    id: number;
    image: string;
    name: string;
    type: string;
    location: string;
    description: string;
    dateAdded: string;
};

const plants: Plant[] = [
    {
        id: 1,
        image: '/garden.jpg', // Ganti dengan path gambar yang sesuai
        name: 'Lorem Ipsum',
        type: 'Lorem Ipsum',
        location: 'Lorem Ipsum',
        description: 'Lorem Ipsum',
        dateAdded: 'Lorem Ipsum',
    },
    // Tambahkan data tanaman lainnya sesuai kebutuhan
];

const PlantCatalog: React.FC = () => {
    const [isAdding, setIsAdding] = useState(false);

    const handleAddClick = () => {
        setIsAdding(true);
    };

    const handleCancelClick = () => {
        setIsAdding(false);
    };
    return (
        <div className="p-6">
            {isAdding ? (
                <AddPlantForm onCancel={handleCancelClick} />
            ) : (
                <>
                    <button onClick={handleAddClick} className="absolute right-12 top-20 bg-green-500 text-white px-4 py-2 rounded mb-4">Tambah
                        Tanaman
                    </button>
                    <div className="overflow-x-auto">
                        <table
                            className="min-w-full mt-7 bg-white border border-gray-300 text-left text-gray-600 font-sans">
                            <thead>
                            <tr>
                                <th className="px-4 py-2 border-b">Gambar</th>
                                <th className="px-4 py-2 border-b">Nama Tanaman</th>
                                <th className="px-4 py-2 border-b">Jenis Tanaman</th>
                                <th className="px-4 py-2 border-b">Lokasi Tumbuh</th>
                                <th className="px-4 py-2 border-b">Deskripsi</th>
                                <th className="px-4 py-2 border-b">Tanggal Ditambahkan</th>
                                <th className="px-4 py-2 border-b">Aksi</th>
                            </tr>
                            </thead>
                            <tbody>
                            {plants.map((plant) => (
                                <tr key={plant.id}>
                                    <td className="px-4 py-2 border-b flex items-center">
                                        <img src={plant.image} alt={plant.name} className="w-24 h-24 mr-4"/>
                                    </td>
                                    <td className="px-4 py-2 border-b">{plant.name}</td>
                                    <td className="px-4 py-2 border-b">{plant.type}</td>
                                    <td className="px-4 py-2 border-b">{plant.location}</td>
                                    <td className="px-4 py-2 border-b">{plant.description}</td>
                                    <td className="px-4 py-2 border-b">{plant.dateAdded}</td>
                                    <td className="px-4 py-2 border-b flex space-x-2">
                                        <button className="text-green-500 hover:text-green-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                                                 viewBox="0 0 20 20"
                                                 fill="currentColor">
                                                <path
                                                    d="M17.414 2.586a2 2 0 010 2.828L8.121 14.707a1 1 0 01-.707.293H5a1 1 0 01-1-1v-2.414a1 1 0 01.293-.707l9.293-9.293a2 2 0 012.828 0zM11 5l4 4M15 7a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"/>
                                            </svg>
                                        </button>
                                        <button className="text-red-500 hover:text-red-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                                                 viewBox="0 0 20 20"
                                                 fill="currentColor">
                                                <path fillRule="evenodd"
                                                      d="M9 2a1 1 0 00-1 1v1H5a1 1 0 000 2h10a1 1 0 100-2h-3V3a1 1 0 00-1-1H9zM4 7a1 1 0 011 1v9a2 2 0 002 2h6a2 2 0 002-2V8a1 1 0 112 0v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8a1 1 0 011-1z"
                                                      clipRule="evenodd"/>
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}

        </div>
    );
};

export default PlantCatalog;
