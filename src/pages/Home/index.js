import { Link, useLocation } from "react-router-dom";
import images from "~/assets/images";
import Banner from "~/components/Banner";

const latestPosts = [
    { id: 1, title: "Bài viết 1", category: "Công nghệ", image: images.logo },
    { id: 2, title: "Bài viết 2", category: "Kinh doanh", image: images.logo },
    { id: 3, title: "Bài viết 3", category: "Sức khỏe", image: images.logo },
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
            <div className="row">
                {latestPosts.map((post) => (
                    <div className="col-md-4" key={post.id}>
                        <div className="card mb-4">
                            <img src={post.image} className="card-img-top" alt={post.title} />
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text"><strong>{post.category}</strong></p>
                                <Link contentEditable={pathname} to="#" className="btn btn-primary">Đọc tiếp</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;