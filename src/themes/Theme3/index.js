import Footer from "./Footer";
import Header from "./Header";

function Theme3({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default Theme3;