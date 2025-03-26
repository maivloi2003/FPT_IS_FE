import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PostDetail = () => {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [relatedPosts, setRelatedPosts] = useState([]);
    const [popularPosts, setPopularPosts] = useState([]);

    useEffect(() => {
        // Giả lập fetch data
        setTimeout(() => {
            setPost({
                id: postId,
                title: "Việt Nam - Singapore sẽ trở thành điển hình hợp tác trong khu vực",
                image: "https://i1-vnexpress.vnecdn.net/2025/03/26/z6443255263359-dfc6d1ba4d3217e-5701-5509-1742967388.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=iEw8pc4Cvm99l1Jgy4qW5Q",
                content: [
                    {
                        type: "text", value: `Thủ tướng Phạm Minh Chính và Thủ tướng Singapore Lawrence Wong hội đàm, nhất trí các biện pháp tạo đột phá cho quan hệ song phương, đưa hợp tác hai nước trở thành điển hình trong khu vực.

Thủ tướng Phạm Minh Chính và Thủ tướng Singapore Lawrence Wong ngày 26/3 hội đàm tại trụ sở Chính phủ, bày tỏ hài lòng về các bước phát triển trong quan hệ song phương, khi Singapore duy trì vị trí nhà đầu tư thứ hai thế giới vào Việt Nam, còn Việt Nam trở thành nước xuất khẩu gạo lớn nhất vào Singapore.

Thêm hai khu công nghiệp Việt Nam - Singapore (VSIP) được cấp chủ trương chấp thuận đầu tư, tạo nên mạng lưới 20 khu VSIP tại 14 tỉnh thành Việt Nam, kim ngạch thương mại tăng trưởng ổn định, đạt 10,3 tỷ USD năm 2024.

Hai bên cũng ghi nhận những tiến triển tích cực trong hợp tác quốc phòng - an ninh, giáo dục - đào tạo, khoa học - công nghệ, du lịch, lao động và giao lưu nhân dân, theo thông cáo Bộ Ngoại giao.

Hai lãnh đạo nhất trí về các biện pháp "quyết đoán, kịp thời" để gia tăng tin cậy chính trị, tạo đột phá mới cho quan hệ Đối tác Chiến lược Toàn diện. Hai bên cam kết tăng cường gắn kết kinh tế thông qua phát huy hiệu quả 5 trụ cột của Hiệp định về Kết nối hai nền kinh tế, quan hệ Đối tác Kinh tế Xanh - Kinh tế Số, đưa hợp tác Việt Nam - Singapore trở thành điển hình hợp tác trong khu vực.` },
                    { type: "image", value: "https://i1-vnexpress.vnecdn.net/2025/03/26/z6443255263359-dfc6d1ba4d3217e-5701-5509-1742967388.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=iEw8pc4Cvm99l1Jgy4qW5Q" },
                    {
                        type: "text", value: `Thủ tướng Phạm Minh Chính đề nghị Singapore tạo điều kiện đưa hàng nông, lâm, thủy sản, thực phẩm chế biến của Việt Nam vào hệ thống phân phối của Singapore; phát triển mạng lưới VSIP 2.0 theo hướng bền vững, thông minh, áp dụng công nghệ sản xuất thông minh để tối ưu hóa hiệu quả thu hút nguồn vốn chất lượng cao vào Việt Nam.

Thủ tướng Singapore nhất trí hai nước cần làm rõ các nội dung chính để nâng cấp hệ thống VSIP hiện nay lên VSIP 2.0 đáp ứng yêu cầu phát triển xanh hơn, thông minh hơn và hiệu quả hơn.

Thủ tướng Singapore nhất trí đề xuất "6 hơn" của Thủ tướng Phạm Minh Chính, gồm thúc đẩy tin cậy chính trị sâu sắc hơn, hợp tác quốc phòng và an ninh thực chất hơn, kết nối hai nền kinh tế hiệu quả hơn, giao lưu nhân dân gắn kết hơn, hợp tác khoa học - công nghệ, đổi mới sáng tạo đột phá hơn và hợp tác khu vực quốc tế chặt chẽ hơn.

Ông Lawrence Wong đề nghị hai nước sớm có những bước phát triển thực chất trong xuất khẩu điện gió ngoài khơi, trao đổi tín chỉ cacbon, hợp tác trong lĩnh vực công nghệ tài chính thông qua dự án kết nối thanh toán bán lẻ xuyên biên giới sử dụng mã QR, truyền dữ liệu xuyên biên giới, qua đó tạo thuận lợi hơn nữa cho hoạt động sản xuất, kinh doanh của doanh nghiệp hai nước.

Hai Thủ tướng nhất trí tiếp tục thúc đẩy hợp tác trên các lĩnh vực then chốt khác, như giáo dục, đào tạo, nâng cao chất lượng nguồn nhân lực, an ninh lương thực, giao lưu văn hóa, nghệ thuật, du lịch, kết nối hàng không, kết nối doanh nghiệp và người dân.

Thủ tướng Phạm Minh Chính đề nghị Singapore tiếp nhận lao động Việt Nam theo hình thức visa lao động, mở rộng các ngành nghề tiếp nhận lao động, tạo điều kiện học tiếng Việt trong các trường có nhiều học sinh người Việt, phát huy vai trò tích cực của cộng đồng người Việt ở Singapore.

Hai Thủ tướng nhất trí duy trì lập trường chung của ASEAN trong vấn đề Biển Đông; nhấn mạnh tầm quan trọng của tự do, an toàn hàng hải, hàng không; bảo đảm thực hiện đầy đủ và hiệu quả Tuyên bố về ứng xử của các bên ở Biển Đông (DOC); tạo môi trường thuận lợi, phấn đấu xây dựng Bộ Quy tắc ứng xử tại Biển Đông (COC) thực chất và hiệu quả, phù hợp với luật pháp quốc tế và Công ước Liên Hợp Quốc về Luật Biển (UNCLOS) 1982.

Sau hội đàm, hai Thủ tướng chứng kiến lễ ký kết văn kiện hợp tác giữa hai nước, trong đó có Ý định thư về Hợp tác xây dựng Chương trình Hành động triển khai quan hệ Đối tác Chiến lược Toàn diện và các thỏa thuận trong lĩnh vực thương mại điện gió, thanh toán xuyên biên giới sử dụng mã QR, phát triển số và đổi mới sáng tạo, giao lưu nhân dân.

Hai lãnh đạo cũng dự lễ khởi công VSIP Thái Bình, được kết nối trực tuyến từ trụ sở Chính phủ tới Khu công nghiệp VSIP tại huyện Thái Thụy, tỉnh Thái Bình.

Dự án đầu tư xây dựng và kinh doanh kết cấu hạ tầng khu công nghiệp VSIP Thái Bình có quy mô hơn 333 ha và tổng số vốn đầu tư hơn 4.932 tỷ đồng (gần 212 triệu USD), được đánh giá là điểm đến lý tưởng cho các ngành công nghiệp mũi nhọn, bao gồm linh kiện điện tử, cơ khí chế tạo, công nghiệp phụ trợ và năng lượng tái tạo.` },
                    { type: "image", value: "https://i1-vnexpress.vnecdn.net/2025/03/26/z6443874639615-8a79ec34b0cd255-2981-9531-1742973876.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=8eP73MlGrrsvAfX4Aj778w" },
                    {
                        type: "text", value: `Việt Nam - Singapore thiết lập quan hệ ngoại giao ngày 1/8/1973. Việt Nam là quốc gia thành viên ASEAN đầu tiên mà Singapore thiết lập quan hệ Đối tác Chiến lược Toàn diện.

Thủ tướng Singapore Lawrence Wong thăm chính thức Việt Nam ngày 25-26/3. Đây là chuyến thăm chính thức đầu tiên tới Việt Nam của ông với tư cách là Thủ tướng Singapore. Chuyến thăm của Thủ tướng Lawrence Wong diễn ra sau hơn một tuần kể từ khi Tổng Bí thư Tô Lâm thăm Singapore và nâng cấp quan hệ hai nước lên Đối tác Chiến lược Toàn diện.

Trong chuyến thăm, ngoài hội đàm với Thủ tướng Phạm Minh Chính, Thủ tướng Lawrence Wong dự kiến hội kiến các lãnh đạo cấp cao Đảng, Nhà nước, Quốc hội Việt Nam và tiến hành một số hoạt động khác.` }
                ],
                date: "26/03/2025",
                author: "Nguyễn Văn A"
            });
            setRelatedPosts([
                { id: 2, title: "Bài viết liên quan 1", image: "https://i1-vnexpress.vnecdn.net/2025/03/25/AFP2025031720250315174520L2v1H-4727-1477-1742893929.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=L7QvELtzn5JWk7OnUC2KOQ" },
                { id: 3, title: "Bài viết liên quan 2", image: "https://i1-vnexpress.vnecdn.net/2025/03/26/settop-1742961040-1742961053-1-2062-7345-1742961396.png?w=300&h=180&q=100&dpr=1&fit=crop&s=XqpKMh_al24NFYIVxTi9Bw" },
            ]);
            setPopularPosts([
                { id: 2, title: "Tiger Woods hẹn hò với con dâu cũ của ông Trump", image: "https://i1-vnexpress.vnecdn.net/2025/03/24/thiet-ke-chua-co-ten-96-174277-3621-1218-1742778634.png?w=300&h=180&q=100&dpr=1&fit=crop&s=F24UNN2mP6Gxo5ScQPy1jg" },
                { id: 3, title: "Tổng thống Zelensky chỉ trích đặc phái viên của ông Trump", image: "https://i1-vnexpress.vnecdn.net/2025/03/26/5563187178137268740a-ukraine-1-8015-2928-1742946512.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=OQYzY8g-eLd4kVuUAkYNLQ" },
                { id: 4, title: "Thủ tướng Singapore đến Việt Nam", image: "https://i1-vnexpress.vnecdn.net/2025/03/25/vnapotalthutuongsingaporetoiha-8928-4430-1742904283.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=tgE_h1VGpeg2cC8UiAtOxA" },
                { id: 5, title: "Phái đoàn Mỹ, Nga kết thúc đàm phán về lệnh ngừng bắn ở Ukraine", image: "https://i1-vnexpress.vnecdn.net/2025/03/25/2025-03-24t164956z-75039069-rc-9072-8165-1742863061.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=oQx33T-ZsKXISld7Z6Aa2w" },
                { id: 6, title: "Những người Mỹ ủng hộ chiến dịch trấn áp nhập cư của ông Trump", image: "https://i1-vnexpress.vnecdn.net/2025/03/22/tru-c-xua-t-de-n-guatemala-2-1-2167-7011-1742621668.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=yDJkaLoi4zcauFuXYUAzyg" },
            ]);
        }, 1000);
    }, [postId]);

    return (
        <div className="container my-4">
            <div className="row">
                {/* Bài viết chi tiết */}
                <div className="col-lg-8">
                    {!post ? (
                        <div className="placeholder-glow">
                            <div className="placeholder col-12" style={{ height: "300px" }}></div>
                        </div>
                    ) : (
                        <article>
                            <h1 className="fw-bold mb-3">{post.title}</h1>
                            <p className="text-muted mb-2">{post.date} - {post.author}</p>
                            {post.content.map((item, index) => (
                                item.type === "text" ? (
                                    <p key={index} className="fs-5">{item.value}</p>
                                ) : (
                                    <img key={index} src={item.value} alt="Bài viết hình ảnh" className="img-fluid rounded my-3" />
                                )
                            ))}
                        </article>
                    )}
                </div>

                {/* Danh sách bài viết xem nhiều */}
                <div className="col-lg-4">
                    <aside>
                        <h3 className="fw-semibold mb-3">Xem nhiều</h3>
                        {popularPosts.map((item) => (
                            <div className="d-flex mb-3" key={item.id}>
                                <img src={item.image} alt={item.title} className="me-3" style={{ width: "80px", height: "60px", objectFit: "cover" }} />
                                <p className="mb-0">{item.title}</p>
                            </div>
                        ))}
                    </aside>
                </div>
            </div>

            <aside className="mt-5">
                <h2 className="fw-semibold mb-3">Bài viết liên quan</h2>
                <div className="row">
                    {relatedPosts.map((item) => (
                        <div className="col-md-6 mb-3" key={item.id}>
                            <div className="card">
                                <img src={item.image} alt={item.title} className="card-img-top" />
                                <div className="card-body">
                                    <p className="card-title fw-semibold">{item.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </aside>
        </div>
    );
};

export default PostDetail;