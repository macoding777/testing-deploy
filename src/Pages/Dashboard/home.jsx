const homeDashboard = () => {
    console.log("homeDashboard")
    return (
        <>
            <div className="page-wrapper">
                <div className="content container-fluid">

                    <div className="page-header">
                        <div className="row">
                            <div className="col">
                                <h3 className="page-title">Data Tables</h3>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                    <li className="breadcrumb-item active">Data Tables</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Data Absensi</h4>
                                    <p className="card-text">
                                        Berikut ini daftar Data Absensi
                                    </p>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table  datanew ">
                                            <thead>
                                            <tr>
                                                <th>Nama</th>
                                                <th>jam Absensi</th>
                                                <th>tanggal</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>Nurdin Syamsudin</td>
                                                <td>7.30</td>
                                                <td>20-2-2024</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default homeDashboard;