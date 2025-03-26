import Footer from "./Footer";
import Header from "./Header";

function Theme1({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default Theme1;