import { useState, useRef } from "react";
import images from "~/assets/images";

function Editor() {
    const [selectedElement, setSelectedElement] = useState(null);
    const [textColor, setTextColor] = useState("#000000");
    const [bgColor, setBgColor] = useState("#ffffff");
    const [showPanel, setShowPanel] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [content, setContent] = useState([]);
    const fileInputRef = useRef(null);

    const handleClick = (e) => {
        e.stopPropagation();
        setSelectedElement(e.target);
        setTextColor(e.target.style.color || "#000000");
        setBgColor(e.target.style.backgroundColor || "#ffffff");
        setShowPanel(true);
    };

    const applyStyle = (styleType, value) => {
        if (selectedElement) {
            selectedElement.style[styleType] = value;
        }
    };

    const handleFileChange = (e, index) => {
        const file = e.target.files[0];
        if (file) {
            const fileUrl = URL.createObjectURL(file);
            setContent((prevContent) => {
                const newContent = [...prevContent];
                newContent[index].value = fileUrl;
                return newContent;
            });
        }
    };

    const addContent = (type) => {
        let newElement;
        if (type === "text") {
            newElement = { type: "text", value: "Nhập nội dung văn bản..." };
        } else if (type === "image") {
            newElement = { type: "image", value: images.admin };
        } else if (type === "video") {
            newElement = { type: "video", value: "" };
        }
        setContent([...content, newElement]);
        setShowAddModal(false);
    };

    return (
        <div className="container-fluid d-flex">
            {/* Khu vực chỉnh sửa */}
            <div className="d-flex flex-column flex-grow-1 p-4 border align-items-center" onClick={handleClick}>
                <h2 className="text-center" contentEditable>Title</h2>
                <p className="text-center">Content</p>

                {/* Hiển thị nội dung động */}
                {content.map((item, index) => (
                    <div key={index} className="mt-3">
                        {item.type === "text" && <p>{item.value}</p>}

                        {item.type === "image" && (
                            <>
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="d-none"
                                    ref={fileInputRef}
                                    onChange={(e) => handleFileChange(e, index)}
                                />
                                <img
                                    src={item.value || "https://via.placeholder.com/300"}
                                    alt="Hình ảnh"
                                    className="img-fluid"
                                    onClick={() => fileInputRef.current.click()}
                                    style={{ cursor: "pointer" }}
                                />
                            </>
                        )}

                        {item.type === "video" && (
                            <>
                                <input
                                    type="file"
                                    accept="video/*"
                                    className="d-none"
                                    ref={fileInputRef}
                                    onChange={(e) => handleFileChange(e, index)}
                                />
                                {item.value ? (
                                    <video controls width="300">
                                        <source src={item.value} type="video/mp4" />
                                    </video>
                                ) : (
                                    <button
                                        className="btn btn-outline-danger"
                                        onClick={() => fileInputRef.current.click()}
                                    >
                                        Chọn Video
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                ))}

                {/* Nút dấu cộng */}
                <button className="d-block btn btn-success mt-3" onClick={() => setShowAddModal(true)}>
                    +
                </button>
            </div>

            {/* Panel chỉnh sửa */}
            <div className={`offcanvas offcanvas-end ${showPanel ? "show" : ""}`} tabIndex="-1" style={{ width: "300px" }}>
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title">Chỉnh sửa</h5>
                    <button type="button" className="btn-close" onClick={() => setShowPanel(false)}></button>
                </div>
                <div className="offcanvas-body">
                    <div className="mb-3">
                        <label className="form-label">Màu chữ</label>
                        <input type="color" className="form-control form-control-color" value={textColor} onChange={(e) => {
                            setTextColor(e.target.value);
                            applyStyle("color", e.target.value);
                        }} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Màu nền</label>
                        <input type="color" className="form-control form-control-color" value={bgColor} onChange={(e) => {
                            setBgColor(e.target.value);
                            applyStyle("backgroundColor", e.target.value);
                        }} />
                    </div>

                    <button className="btn btn-success w-100" onClick={() => setShowPanel(false)}>
                        Lưu & Đóng
                    </button>
                </div>
            </div>

            {/* Modal thêm nội dung */}
            {showAddModal && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ background: "rgba(0,0,0,0.5)" }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Thêm nội dung</h5>
                                <button type="button" className="btn-close" onClick={() => setShowAddModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <button className="btn btn-outline-primary w-100 mb-2" onClick={() => addContent("text")}>
                                    Thêm văn bản
                                </button>
                                <button className="btn btn-outline-secondary w-100 mb-2" onClick={() => addContent("image")}>
                                    Thêm hình ảnh
                                </button>
                                <button className="btn btn-outline-danger w-100" onClick={() => addContent("video")}>
                                    Thêm video
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Editor;
