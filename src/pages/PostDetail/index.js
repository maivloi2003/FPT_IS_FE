import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GiBrain } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { IoSyncSharp } from "react-icons/io5";
import { RiArrowRightSLine } from "react-icons/ri";

const PostDetail = () => {

    return (
        <div className="container my-4  ">
            <div className="row justify-content-center">
                {/* Bài viết chi tiết */}
                <div className="col-lg-8  ">
                    <div className="d-flex  align-items-center gap-3">
                        <p className="fs-4 mb-0">MENTAL HEALTH</p>
                        <GiBrain size={30} color="pink" />
                    </div>
                    <h1>Làm Sao Để Giữ Lửa Trong Công Việc?</h1>
                    <p className="fs-5">hay là cách để phòng tránh và ứng phó với burnout (kiệt sức)</p>
                    <div className="d-flex  align-items-center mt-3 gap-3">
                        <img src="https://mighty.tools/mockmind-api/content/human/125.jpg" className="rounded-circle" style={{ width: "35px", height: "35px" }} alt="avatar" />
                        <div className="d-flex flex-column text-uppercase text-secondary" style={{ fontSize: "12px", lineHeight: "1.2" }}>
                            <p className="mb-2 fw-semibold">Tien Pham</p>
                            <span>Feb 16, 2025</span>
                        </div>
                    </div>
                    <hr className=" border-2 border-dark" style={{ marginTop: "30px" }} />

                    <div className=" d-flex align-items-center justify-content-between " >
                        <div className="d-flex align-items-center " style={{ cursor: "pointer" }}>
                            <div className="rounded-pill  border border-secondary px-3 py-2 me-2 d-flex align-items-center">
                                <CiHeart size={20} className="me-2" />
                                12
                            </div>
                            <div className="rounded-pill border border-secondary px-3 py-2 me-2 d-flex align-items-center">
                                <FaRegComment size={20} className="me-2" />
                            </div>
                            <div className="rounded-pill border border-secondary px-3 py-2 me-2 d-flex align-items-center">
                                <IoSyncSharp size={20} className="me-2" />
                                1
                            </div>
                        </div>
                        <div className="rounded-pill border border-secondary px-4 py-2" style={{ cursor: "pointer" }}>
                            Share
                        </div>
                    </div>
                    <hr className=" border-2 border-dark" style={{ marginTop: "30px" }} />
                    <div>
                        <h5>Chào bạn,</h5>
                        <p>
                            Mấy tuần qua, mình quan sát thấy một số dấu hiệu bản thân đang bị kiệt sức trong công việc.
                            Đó là cảm giác mà mình đã từng gặp vào khoảng ba năm trước, khi mình quyết định nghỉ việc giảng dạy ở trường: Không thấy niềm vui trong những
                            việc mình đang làm và cảm thấy cạn kiệt năng lượng vào buổi sáng khi thức dậy.
                        </p>
                        <p>
                            Cách mình xử lý vấn đề này bây giờ khác nhiều với thời điểm đó ở chỗ, mình đã dễ dàng công nhận rằng bản thân đang cần được giúp đỡ thay vì tự trách móc và nghi ngờ công việc mình đang làm. Một khái niệm đã giúp mình tiếp cận vấn đề này lành mạnh và hiệu quả hơn đó là burnout - kiệt sức. Vì vậy, hôm nay mình sẽ chia sẻ với bạn một chút về burnout.
                        </p>
                        <span>Hy vọng bạn thích bài viết tuần này (dù tựa đề nghe có vẻ không tươi sáng mấy)</span>
                        <hr className=" border-2 border-dark" style={{ marginTop: "30px" }} />
                        <div className="d-flex align-items-center justify-content-center mt-4">
                            <Link
                                to="#"
                                className="text-white text-decoration-none fw-semibold d-flex align-items-center rounded-3 bg-primary border px-3 py-2"
                            >
                                Upgrade to paid
                                <RiArrowRightSLine className="fs-3" />
                            </Link>
                        </div>
                        <p className="mt-3">Theo Phân Loại Bệnh Tật Quốc Tế (ICD-11) do Tổ chức Y tế Thế giới (WHO) soạn thảo và ban hành, kiệt sức (burnout) được liệt kê vào vấn đề thuộc nhóm sức khoẻ nghề nghiệp - occupational phenomenon.</p>
                        <p>Burnout được mô tả trong chương "Factors influencing health status or contact with health services" - bao gồm những lý do khiến mọi người tìm kiếm dịch vụ chăm sóc sức khoẻ nhưng lại không được tính là bệnh hoặc vấn đề y tế.</p>
                        <span>Nguyên văn định nghĩa từ QD-85, ICD-11:</span>
                        <div className="d-flex gap-3 mt-3">
                            <div style={{ background: "purple", width: "4px", height: "300px" }}></div>
                            <div>
                                <p>Burnout is a syndrome conceptualized as resulting from chronic workplace stress that has not been successfully managed.</p>
                                <span>It is characterized by three dimensions:</span>
                                <ul className="mt-3">
                                    <li className="mb-2">feelings of energy depletion or exhaustion;</li>
                                    <li className="mb-2">increased mental distance from one’s job;</li>
                                    <li>or feelings of negativism or cynicism related to one’s job; and a sense of ineffectiveness and lack of accomplishment.</li>
                                </ul>
                                <p>Burnout refers specifically to phenomena in the occupational context and should not be applied to describe experiences in other areas of life.</p>
                            </div>
                        </div>
                        <p className="mt-3">Có thể tạm dịch:</p>
                        <div className="d-flex gap-3 mt-3">
                            <div style={{ background: "purple", width: "4px", height: "200px" }}></div>
                            <div>
                                <p>Burn-out là một hội chứng xảy ra do hệ quả của căng thẳng công việc kéo dài mà không được xử lý hiệu quả. Hội chứng này được đặc trưng bởi ba khía cạnh:</p>
                                <ul className="mt-3">
                                    <li className="mb-2">cảm giác kiệt quệ năng lượng hoặc mệt mỏi;</li>
                                    <li className="mb-2">cảm giác thiếu kết nối và xa cách với công việc;</li>
                                    <li>hoặc cảm giác tiêu cực, hoài nghi liên quan đến công việc; và suy giảm cảm nhận về hiệu quả và thành tựu trong công việc.</li>
                                </ul>
                            </div>
                        </div>
                        <img style={{ height: "500px" }} src="https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7770df20-4f5b-4567-b934-5c7e58fb684c_1420x916.png" alt="" />
                        <p>Một số nghề nghiệp có nguy cơ cao gặp phải burnout là bác sĩ, y tá, giáo viên, luật sư, start-up founders, chủ doanh nghiệp, và nhân viên các ngành dịch vụ. Nhà nghiên cứu và người làm trong môi trường học thuật có khối lượng công việc lớn cũng có thể đối diện với burnout. Nhưng thực ra thì bất kỳ công việc hay ngành nghề nào cũng có thể có nguy cơ gây kiệt sức nếu nó phát sinh những chu kỳ stress lặp đi lặp lại mà không được giải quyết hiệu quả. Một số yếu tố gia tăng nguy cơ burnout là môi trường làm việc độc hại và/hoặc thiếu hỗ trợ, thời gian làm việc dài, và công việc đòi hỏi cao về lao động cảm xúc và/hoặc trí óc.</p>
                        <p>Dù ICD-11 chỉ công nhận burnout trong bối cảnh nghề nghiệp, người ta cũng thường dùng từ burnout để chỉ việc mất niềm vui vào một việc gì đó, ví dụ như parenting burnout - kiệt sức liên quan đến nuôi dạy con. Theo nghĩa này thì burnout khá gần với một triệu chứng của trầm cảm trong Cẩm nang Chẩn đoán và Thống kê Rối loạn Tâm thần, lần thứ 5) của Hiệp hội Tâm thần Hoa Kỳ (APA) (DSM-V), dù rằng burnout không được ghi nhận trong đây như một rối loạn tâm thần.</p>
                        <p>Nếu bạn đọc các sách vở, tài liệu, hoặc nội dung từ các influencers trên mạng xã hôi hoặc bài diễn văn truyền cảm hứng từ những người nổi tiếng, bạn sẽ thấy là những người này tập trung nhiều vào các tips và tricks giúp bạn chống lại kiệt sức bằng cách tự biết chăm sóc mình, hay học cách tự quản lý cuộc sống và công việc của bản thân,… Tuy nhiên, chuyên gia về burnout sẽ nói với bạn rằng các bí kíp đó không thực sự hiệu quả nếu như không có sự thay đổi trong chính môi trường làm việc của bạn.</p>
                        <p>Dù thay đổi công việc mà các chuyên gia nói không chỉ có biện pháp cực đoan nhất là ... nghỉ việc, nhưng đôi khi chúng ta đợi đến khi mọi chuyện không thể cứu vãn rồi mới hành động. Vì vậy, khi nhắc tới thay đổi môi trường làm việc thì mọi người thường nghĩ ngay tới chuyện nộp đơn thôi việc. Tuy nhiên, thay đổi môi trường làm việc còn có nghĩa là áp dụng các biện pháp như thay đổi một số cách tiếp cận trong công việc chẳng hạn như cách giao tiếp với sếp và cộng sự, để dần cải thiện tình hình, nhằm mang lại một môi trường làm việc tốt hơn cho chính bạn và đồng nghiệp của bạn.</p>
                        <p>Với burnout, bạn không thể giải quyết bằng cách quyết tâm đề phòng nó như một kiểu "New Year Resolution" về việc self-care tốt hơn, hoặc chạy trốn khỏi nó, hoặc đè nén và không công nhận sự hiện diện của nó. Cách để ứng phó với burnout là chấp nhận rằng mình đang có vấn đề và cần được trợ giúp.

                            Trợ giúp đầu tiên là sự tự thấu cảm - self-compassion. Đó là suy nghĩ rằng "Tôi đang cần được chăm sóc, thấu hiểu, và không nên chịu sự phán xét chỉ vì tôi không làm tốt như mong muốn."</p>
                        <p>Trợ giúp thứ hai đến từ bên ngoài. Hãy nhìn vào môi trường làm việc của bạn và tự hỏi: "Tại sao tôi đang trải qua điều này? Điều gì trong công việc của tôi hay những tương tác trong công việc khiến cho tôi có cảm giác này?" và đi tìm sự trợ giúp cho các vấn đề này dựa vào mức độ ưu tiên (nghiêm trọng) và/hoặc mức độ khả thi.</p>
                        <hr className=" border-2 border-dark" style={{ marginTop: "30px" }} />
                        <p className="text-center" style={{ maxWidth: "800px" }}>Đôi khi chúng ta chán ghét công việc của mình không phải vì bản thân công việc đó, mà chỉ bởi vì chúng ta đã không khoẻ, trong suốt một thời gian dài.</p>
                        <hr className=" border-2 border-dark" style={{ marginTop: "30px" }} />
                        <p>Ngày 18/2 và 23/2 sắp tới, cộng đồng học tập tại Đông Labs tổ chức hai buổi workshop với chủ đề Tổng Kết Năm, mở ra một không gian cho bất kỳ ai muốn dành cho mình một không gian riêng để hồi tưởng, suy ngẫm, và xây dựng nội lực bản thân để phát triển bản thân. Nếu bạn muốn tự làm tổng kết năm thì cũng có thể sử dụng mẫu của Đông Labs tại đây.</p>
                        <span>Mong gặp bạn ở đó, còn nếu không thì, hẹn gặp lại bạn trong bài viết tuần sau! :)</span>
                        <div>
                            <div className="d-flex align-items-center justify-content-center mt-4">
                                <Link
                                    to="#"
                                    className="text-white text-decoration-none fw-semibold d-flex align-items-center rounded-3 bg-primary border px-3 py-2"
                                >
                                    Tổng Kết Năm offline
                                </Link>
                            </div>
                            <div className="d-flex align-items-center justify-content-center mt-4">
                            <Link
                                to="#"
                                className="text-white text-decoration-none fw-semibold d-flex align-items-center rounded-3 bg-primary border px-3 py-2"
                            >
                                Tổng Kết Năm online
                            </Link>
                        </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default PostDetail;