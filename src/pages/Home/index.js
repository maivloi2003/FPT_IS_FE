import { Link, Links, useLocation } from "react-router-dom";
import Banner from "~/components/Banner";
import { RiArrowRightSLine } from "react-icons/ri";

const tools = [
    { id: 1, title: "Mind Mapping: Visual Của Làng Ghi Chép", author: "Tien Pham ", description: "Và 3 cách mind mapping gây nghiện với Obsidian", image: "https://substackcdn.com/image/fetch/w_600,h_400,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ffd1a8103-3556-4e75-ad8f-5ac96129afa2_1361x801.png" },
    { id: 2, title: "Brainstorming 101", author: "Tien Pham ", description: "Công cụ tư duy hay màn dạo đầu chiếu lệ?", image: "https://substackcdn.com/image/fetch/w_600,h_400,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F39aae2fe-8017-49d6-946b-7c8ca9bae7a3_1413x946.png" },
    { id: 3, title: "Obsidian: 5 Bước Đơn Giản Để Bắt Đầu", author: "Tien Pham ", description: "Bộ não thứ hai hay là công cụ mài giũa những chỗ cùn của tư duy?", image: "https://substackcdn.com/image/fetch/w_600,h_400,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F353c76ae-8e3e-4e22-a752-2176ea83b5ad_970x401.png" },
    { id: 4, title: "Thiết Kế Thói Quen Sáng Tạo Của Bạn Với Obsidian", author: "Tien Pham ", description: "Hãy tưởng tượng bạn đang ngồi trước máy tính và quyết tâm hoàn tất một công việc đã dự định.", image: "https://substackcdn.com/image/fetch/w_600,h_400,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1a050b23-b177-4090-9da9-feb66c67f589_640x427.jpeg" },

];

const note = [
    { id: 1, title: "Mình Tổ Chức Workshop Để Làm Gì?", author: "Tien Pham ", description: "đôi dòng về sự kiện cuối tuần qua", image: "https://substackcdn.com/image/fetch/w_600,h_400,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb8975c52-eefd-4c74-bdeb-65c8d4adaf14_5472x3648.jpeg" },
    { id: 2, title: "Ghi chép: Nghệ Thuật Lắng Nghe Tiếng Lòng", author: "Tien Pham ", description: "Hôm nay, lòng bạn có gì muốn nói?", image: "https://substackcdn.com/image/fetch/w_600,h_400,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F332dcc12-9477-446a-b412-a4d61a964a61_1816x2420.jpeg" },
    { id: 3, title: "Workshop: Sức Mạnh Của Ghi Chép", author: "Tien Pham ", description: "một sự kiện sẽ thay đổi mindset của bạn về ghi chép mãi mãi", image: "https://substackcdn.com/image/fetch/w_600,h_400,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2543fe64-3515-49d5-8f2a-75ea3e2fead1_1920x1080.png" },
    { id: 4, title: "On note-taking", author: "Tien Pham ", description: "you don't want to take notes, you want to think effectively", image: "https://substackcdn.com/image/fetch/w_600,h_400,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff3254e3a-868f-4a55-9674-636a510f49dd_1823x1147.png" },

];

const health = [
    { id: 1, title: "How To Deal With Your Anxiety?", author: "Tien Pham ", description: "and why we worry", image: "https://substackcdn.com/image/fetch/w_600,h_400,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8a9ef260-9c14-497f-b641-d275bb989426_2048x1024.png" },
    { id: 2, title: "Em có đang hạnh phúc không?", author: "Tien Pham ", description: "Hai loại hạnh phúc", image: "https://substackcdn.com/image/fetch/w_600,h_400,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F990dfae3-714e-4f08-b6f4-76a7c5b291d9_1024x948.png" },
    { id: 3, title: "Những Thần Thoại Về Não Bộ", author: "Tien Pham ", description: "Bạn thích thần thoại, hay sự thật?", image: "https://substackcdn.com/image/fetch/w_600,h_400,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdeb03f33-bd37-4eb9-82b8-f08a7214621c_959x540.webp" },
    { id: 4, title: "Làm Gì Với Cô Đơn?", author: "Tien Pham ", description: "Mình ta với ta, xấu và tốt", image: "https://substackcdn.com/image/fetch/w_600,h_400,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7db522ac-bf79-47ba-bfd7-71ee82644f42_1920x2560.jpeg" },

];

const life_Learning = [
    { id: 1, title: "How To Be Curious?", author: "Tien Pham ", description: "and the two types of curiosity", image: "https://substackcdn.com/image/fetch/w_600,h_400,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F57e66085-75e2-4952-9069-5de62037c729_1940x2590.jpeg" },
    { id: 2, title: "Obsidian Như Một Công Cụ Học Tập", author: "Tien Pham ", description: "Ba cách để học mọi thứ bạn muốn từ Youtube với Obsidian", image: "https://substackcdn.com/image/fetch/w_600,h_400,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0c8562e2-f8a8-4bbc-b45b-778912b035a7_1024x1024.webp" },
    { id: 3, title: "Học Tập Suốt Đời", author: "Tien Pham ", description: "Khi người lớn cần vác cặp đi học trẻ con", image: "https://images.unsplash.com/photo-1631779202803-7f1415c87a9d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 4, title: "Động Lực: Bên Nội, Bên Ngoại", author: "Tien Pham ", description: "Sức mạnh của bạn đến từ đâu?", image: "https://substackcdn.com/image/fetch/w_600,h_400,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2ee6a98f-dbd2-4bc4-b9ad-4bfbac89428c_344x445.png" },

];

const latestPosts = [
    { id: 1, title: "Làm sao để giữ lửa trong công việc", author: "Tien Pham ", description: "hay là cách để phòng tránh và ứng phó với burnout (kiệt sức)", image: "https://substackcdn.com/image/fetch/w_600,h_400,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7770df20-4f5b-4567-b934-5c7e58fb684c_1420x916.png" },
    { id: 2, title: "Workshop: Tổng Kết Năm", author: "Tien Pham ", description: "sorting our lives, together", image: "https://substackcdn.com/image/fetch/w_600,h_400,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fffb4f1d0-4961-448f-94ac-a53a3003f7ea_2000x2000.png" },
    { id: 3, title: "Vĩ Thanh 2024", author: "Tien Pham ", description: "Ôn cố tri tân", image: "https://substackcdn.com/image/fetch/w_600,h_400,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa6114fb4-b6f1-4654-a8d9-b4c35b2e11e6_5568x3712.jpeg" },
];

const popularPosts = [
    { id: 1, title: "Obsidian: Hơn Cả Một Ứng Dụng Ghi Chép", author: "TIEN PHAM", image: "https://substackcdn.com/image/fetch/w_150,h_150,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2f6ec8a0-af4c-44ba-8136-a17a32f454fb_949x832.png" },
    { id: 2, title: "How to Think About Your Job?", author: "VAN LOI", image: "https://substackcdn.com/image/fetch/w_150,h_150,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6a3cf6a3-1c26-4095-8d5e-e3a7c4d49a6d_3821x2517.jpeg" },
    { id: 3, title: "Ghi Chép Hằng Ngày Để Làm Gì?", author: "VAN KHOA", image: "https://substackcdn.com/image/fetch/w_150,h_150,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9467d8fc-26a3-483a-b739-ce96d984e88e_1588x681.png" },
    { id: 3, title: "Obsidian Như Một Công Cụ Học Tập", author: "VAN LOI", image: "https://substackcdn.com/image/fetch/w_150,h_150,c_fill,f_webp,q_auto:good,fl_progressive:steep,g_center/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0c8562e2-f8a8-4bbc-b45b-778912b035a7_1024x1024.webp" },
];

function Home() {
    const location = useLocation();
    const pathname = location.search.substring(1);
    console.log(pathname);


    return (
        <div className="container mt-4">

            <Banner
                banners={[
                    'https://insieutoc.vn/wp-content/uploads/2021/02/mau-banner-quang-cao-khuyen-mai.jpg',
                    'https://ingiahan.net/wp-content/uploads/2016/05/02-12.jpg',
                    'https://inbaongan.com.vn/Areas/Admin/Content/Image/banner1.jpg',
                    'https://insieutoc.vn/wp-content/uploads/2021/02/mau-banner-quang-cao-khuyen-mai.jpg',
                    'https://ingiahan.net/wp-content/uploads/2016/05/02-12.jpg',
                    'https://inbaongan.com.vn/Areas/Admin/Content/Image/banner1.jpg'
                ]}
            />
            {/* Danh sách bài viết top xu hướng */}
            <div className="mt-5">
                <div className="d-flex justify-content-between align-items-center">
                    <h2 className="fw-bold">Most Popular</h2>
                    <Link to="#" className="text-primary fw-semibold">
                        View All
                    </Link>
                </div>
                <div className="row mt-3">
                    {popularPosts.map((post) => (
                        <div className="col-md-3" key={post.id}>
                            <div className="card border-0 shadow-sm">
                                <div className="row g-0 align-items-center">
                                    <div className="col-8">
                                        <div className="card-body p-2">
                                            <h6 className="card-title mb-1">{post.title}</h6>
                                            <p className="card-text text-muted small">{post.author}</p>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <img src={post.image} alt={post.title} className="img-fluid rounded-start" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Danh sách bài viết mới nhất */}
            <h2 contentEditable={pathname} className="mt-4">Bài viết mới nhất</h2>
            <div className="row mt-5">
                <div className="col-md-8">
                    <div className="row">
                        {latestPosts.map((post) => (
                            <div className="col-md-4" key={post.id}>
                                <div className="card h-100 d-flex flex-column mb-4 ">
                                    <img src={post.image} className="card-img-top img-fluid" style={{ height: "200px", objectFit: "cover" }} alt={post.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{post.title}</h5>
                                        <p className="card-text text-truncate">{post.description}</p>
                                        <p>{post.author}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col-md-4 d-flex flex-column ">
                    <h2>Đông Labs' Blog</h2>
                    <p style={{ maxWidth: "400px" }}>
                        Kiến thức khoa học hành vi, khoa học thần kinh, và tâm lý học ứng dụng, giúp bạn thiết kế một cuộc đời hạnh phúc, ý nghĩa, và sáng tạo. Bắt đầu từ hôm nay.
                    </p>
                    <button type="button" className="btn btn-primary px-4 py-2 mt-3" style={{ width: "200px" }}>Nâng cấp lên trả phí</button>
                    <hr className="mt-4 border-2 border-dark" />
                    <h4>Recommendations</h4>
                </div>

                <div className="d-flex align-items-center mt-5">
                    <Link to="#" className=" text-white  text-decoration-none fw-semibold d-flex align-items-center rounded-3  bg-primary border px-3 py-2">
                        Xem tất cả
                        <RiArrowRightSLine className="fs-3" />
                    </Link>
                </div>
            </div>
            <hr className=" border-2 border-dark" style={{ marginTop: "100px" }} />

            {/* học tập suốt đời */}
            <h2 contentEditable={pathname} className="mt-4">học tập suốt đời</h2>
            <div className="row mt-5">
                {life_Learning.map((post) => (
                    <div className="col-md-3" key={post.id}>
                        <div className="card h-100 d-flex flex-column mb-4">
                            <img src={post.image} className="card-img-top img-fluid" style={{ height: "200px", objectFit: "cover" }} alt={post.title} />
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text text-truncate">{post.description}</p>
                                <p>{post.author}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <hr className=" border-2 border-dark" style={{ marginTop: "100px" }} />
            {/* #sức-khỏe */}
            <h2 contentEditable={pathname} className="mt-4">#sức-khỏe</h2>
            <div className="row mt-5">
                {health.map((post) => (
                    <div className="col-md-3" key={post.id}>
                        <div className="card h-100 d-flex flex-column mb-4">
                            <img src={post.image} className="card-img-top img-fluid" style={{ height: "200px", objectFit: "cover" }} alt={post.title} />
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text text-truncate">{post.description}</p>
                                <p>{post.author}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <hr className=" border-2 border-dark" style={{ marginTop: "100px" }} />
            {/* #ghi chép*/}
            <h2 contentEditable={pathname} className="mt-4">#ghi chép</h2>
            <div className="row mt-5">
                {note.map((post) => (
                    <div className="col-md-3" key={post.id}>
                        <div className="card h-100 d-flex flex-column mb-4">
                            <img src={post.image} className="card-img-top img-fluid" style={{ height: "200px", objectFit: "cover" }} alt={post.title} />
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text text-truncate">{post.description}</p>
                                <p>{post.author}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <hr className=" border-2 border-dark" style={{ marginTop: "100px" }} />
            {/* #công cụ cho suy nghĩ*/}
            <h2 contentEditable={pathname} className="mt-4">#công cụ cho suy nghĩ</h2>
            <div className="row mt-5">
                {tools.map((post) => (
                    <div className="col-md-3" key={post.id}>
                        <div className="card h-100 d-flex flex-column mb-4">
                            <img src={post.image} className="card-img-top img-fluid" style={{ height: "200px", objectFit: "cover" }} alt={post.title} />
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text text-truncate">{post.description}</p>
                                <p>{post.author}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;