function Banner({ banners }) {
    return (
        <div className="container-xxl mt-2">
            <div id="bannerCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {banners.map((item, index) => (
                        <button
                            key={index}
                            type="button"
                            data-bs-target="#bannerCarousel"
                            data-bs-slide-to={index}
                            className={index === 0 ? "active" : ""}
                            aria-current={index === 0 ? "true" : undefined}
                        ></button>
                    ))}
                </div>

                <div className="carousel-inner rounded-2">
                    {banners.map((item, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                            <img src={item} className="d-block w-100" style={{ height: 300, objectFit: "cover" }} alt={`Ảnh ${index}`} />
                        </div>
                    ))}
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#bannerCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#bannerCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
        </div>
    );
}

export default Banner;