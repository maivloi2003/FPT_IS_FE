function Login() {

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <form className="container mt-4 d-flex flex-column align-items-center" onSubmit={handleSubmit}>
            <h3 className="text-primary my-4">Sign In</h3>
            <div className="mb-4 col-8 row">
                <label htmlFor="Email" className="col-sm-3 col-form-label">Email</label>
                <div className="col-sm-9">
                    <input type="text" className="form-control" id="Email" placeholder="email@example.com" />
                </div>
            </div>
            <div className="mb-4 col-8 row">
                <label htmlFor="Password" className="col-sm-3 col-form-label">Password</label>
                <div className="col-sm-9">
                    <input type="password" className="form-control" id="Password" placeholder="Password" />
                </div>
            </div>
            <div className="mb-4 col-8 row justify-content-center">
                <button className="btn btn-primary col-2" type="submit">Sign In</button>
            </div>
        </form>
    );
}

export default Login;