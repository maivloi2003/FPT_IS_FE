import { useState } from "react";

function Dashboard() {
    // Mock data thống kê
    const stats = {
        users: 120,
        orders: 50,
        posts: 30,
        media: 200,
    };

    // Hoạt động gần đây
    const [recentActivities] = useState([
        { id: 1, action: "Người dùng mới đăng ký", time: "10 phút trước" },
        { id: 2, action: "Đơn hàng mới được tạo", time: "30 phút trước" },
        { id: 3, action: "Bài viết mới được xuất bản", time: "1 giờ trước" },
    ]);

    return (
        <div className="container mt-4">
            <h2 className="text-center">Bảng Điều Khiển</h2>

            {/* Thống kê */}
            <div className="row text-center my-4">
                <div className="col-md-3">
                    <div className="card bg-primary text-white p-3">
                        <h4>{stats.users}</h4>
                        <p>Người dùng</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-success text-white p-3">
                        <h4>{stats.orders}</h4>
                        <p>Đơn hàng</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-warning text-dark p-3">
                        <h4>{stats.posts}</h4>
                        <p>Bài viết</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-info text-white p-3">
                        <h4>{stats.media}</h4>
                        <p>File media</p>
                    </div>
                </div>
            </div>

            {/* Hoạt động gần đây */}
            <div className="card p-3">
                <h5>Hoạt động gần đây</h5>
                <ul className="list-group">
                    {recentActivities.map(activity => (
                        <li className="list-group-item d-flex justify-content-between" key={activity.id}>
                            {activity.action}
                            <span className="text-muted">{activity.time}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Dashboard;
