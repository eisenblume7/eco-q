import Image from "next/image";

export default function KegiatanSection() {
    const posts = [
        {
            title: "Plants Around Us",
            date: "December 23, 2021",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt facilisis nuncLorem ipsum dolor sit.",
            image: "/images/plants-1.jpg",
        },
        {
            title: "Lorem Ipsum",
            date: "December 16, 2021",
            content:
                "Lorem ipsum dolor sit amet, consectetur donec adipiscing elit. Tincidunt facilisis nunc lorem.",
            image: "/images/plants-2.jpg",
        },
        {
            title: "Lorem Ipsum",
            date: "November 11, 2021",
            content:
                "Lorem ipsum dolor sit amet, consectetur donec adipiscing elit. Tincidunt facilisis nunc lorem.",
            image: "/images/plants-3.jpg",
        },
        {
            title: "Lorem Ipsum",
            date: "November 3, 2021",
            content:
                "Lorem ipsum dolor sit amet, consectetur donec adipiscing elit. Tincidunt facilisis nunc lorem.",
            image: "/images/plants-4.jpg",
        },
    ];

    return (
        <section className="relative p-12 bg-white">
            <Image
                src="/plant3.png"
                alt="Plant Vector"
                className="absolute -top-40 -left-20 opacity-30 overflow-hidden"
                width={1200}
                height={1200}
            />
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-5xl text-[#214f30] font-libre">Kegiatan</h2>
                <a
                    href="#"
                    className="text-lg text-[#214f30] font-bold  flex items-center"
                >
                    VIEW ALL POSTS <span className="ml-2">→</span>
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                    <img
                        src={posts[0].image}
                        alt={posts[0].title}
                        className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-2xl font-semibold font-libre text-[#214f30]">
                        {posts[0].title}
                    </h3>
                    <p className="text-gray-600 mb-2">{posts[0].content}</p>
                    <p className="text-gray-400">{posts[0].date}</p>
                </div>

                <div className="flex flex-col gap-6">
                    {posts.slice(1).map((post, index) => (
                        <div key={index} className="flex items-center gap-4">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-28 h-28 object-cover rounded-lg"
                            />
                            <div>
                                <h4 className="text-xl font-semibold font-libre text-[#214f30]">
                                    {post.title}
                                </h4>
                                <p className="text-gray-600">{post.content}</p>
                                <p className="text-gray-400">{post.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
