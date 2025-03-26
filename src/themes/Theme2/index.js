import Footer from "./Footer";
import Header from "./Header";

function Theme2({children}) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default Theme2;