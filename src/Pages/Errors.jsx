import {Link} from "react-router-dom";


const ErrorsPage = () => {

    document.title = "404 - Not Found";
    return <>
        <head>
            {/*<link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.jpg"/>*/}


        </head>
        <body className="error-page">
        {/*<div id="global-loader">*/}
        {/*    <div className="whirly-loader"></div>*/}
        {/*</div>*/}

        <div className="main-wrapper">
            <div className="error-box">
                <h1>404</h1>
                <h3 className="h2 mb-3"><i className="fas fa-exclamation-circle"></i> Oops! Page not found!</h3>
                <p className="h4 font-weight-normal">The page you requested was not found.</p>
                {/*<a href="index.html" className="btn btn-primary">Back to Home</a>*/}
                <Link to={"/"} className="btn btn-primary">Kembali Ke Home</Link>
            </div>
        </div>


        <script src="assets/js/jquery-3.6.0.min.js"></script>

        <script src="assets/js/feather.min.js"></script>

        <script src="assets/js/jquery.slimscroll.min.js"></script>

        <script src="assets/js/bootstrap.bundle.min.js"></script>

        <script src="assets/js/script.js"></script>
        </body>
    </>
}


export default ErrorsPage;