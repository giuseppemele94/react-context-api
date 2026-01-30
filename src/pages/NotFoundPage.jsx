import { Link } from "react-router-dom";
function NotFoundPage() {

    return (

        <section className="py-5">
            <div className="container">
                <div className="p-5 rounded-4 bg-body-tertiary text-center">

                    <h1 className="display-5 fw-bold">Not Found ❌ </h1>

                    <Link to="/" className="btn btn-primary">
                        Torna alla Home
                    </Link>


                </div>
            </div>
        </section>
    );
}

export default NotFoundPage;
