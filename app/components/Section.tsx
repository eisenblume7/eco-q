import Image from "next/image";
import { ButtonSecondary } from "./ButtonSecondary";
export default function CatalogSection() {
    return (
        <section className="relative bg-[#27472E] px-64 py-16 z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                <Image
                    src="/plant.png"
                    alt="Plant Vector"
                    className="absolute bottom-20 right-0 opacity-30"
                    width={800}
                    height={800}
                />

                <div className="w-full">
                    <Image
                        src="/p1.jpg"
                        alt="Tanaman Hias"
                        width={600}
                        height={400}
                        className="rounded-lg object-cover"
                    />
                </div>

                <div className="text-white">
                    <h2 className="text-4xl font-libre mb-6">Katalog Tanaman</h2>
                    <p className="text-lg leading-relaxed font-sans mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
                        facilisis nuncLorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Tincidunt facilisis nunc.
                    </p>
                    <ButtonSecondary className="mt-4 border-white" learnMoreClassName="text-white" text={"LEARN MORE"}/>
                </div>

                <div className="w-full md:col-span-2 gap-10 inline-flex z-10">
                    <Image
                        src="/p3.jpg" // Ganti dengan path gambar Anda
                        alt="Interior dengan Tanaman"
                        width={600}
                        height={300}
                        className="rounded-lg object-cover"
                    />

                    <Image
                        src="/p2.jpg" // Ganti dengan path gambar Anda
                        alt="Interior dengan Tanaman"
                        width={600}
                        height={300}
                        className="rounded-lg object-cover"
                    />
                </div>

            </div>
        </section>
    );
}
