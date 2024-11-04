import React, { useState } from 'react';

type AddPlantFormProps = {
    onCancel: () => void;
};

const AddPlantForm: React.FC<AddPlantFormProps> = ({ onCancel }) => {
    const [formData, setFormData] = useState({
        name: '',
        type: '',
        location: '',
        description: '',
        image: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logic untuk menambahkan tanaman baru (misalnya kirim data ke server atau update state)
        console.log(formData);
        onCancel(); // Kembali ke katalog setelah submit
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block font-medium">Nama tanaman</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded"
                />
            </div>
            <div>
                <label className="block font-medium">Jenis tanaman</label>
                <input
                    type="text"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded"
                />
            </div>
            <div>
                <label className="block font-medium">Lokasi tumbuh</label>
                <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded"
                />
            </div>
            <div>
                <label className="block font-medium">Deskripsi</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded"
                />
            </div>
            <div>
                <label className="block font-medium">Gambar tanaman</label>
                <input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded"
                />
            </div>
            <div className="flex justify-end space-x-4">
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-4 py-2 rounded border border-gray-300 text-gray-700"
                >
                    Batalkan
                </button>
                <button
                    type="submit"
                    className="px-4 py-2 rounded bg-green-500 text-white"
                >
                    Tambahkan
                </button>
            </div>
        </form>
    );
};

export default AddPlantForm;
