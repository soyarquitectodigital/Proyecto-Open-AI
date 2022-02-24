import { Form } from "react-bootstrap";





export default function FormNewBot() {



    return (
        <>
            <form>

                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Datos del Bot</h5>
                        <div className="row mb-3">

                            <div className="col-sm-12">
                                <input type="text" placeholder="Nombre del Bot" className="form-control" />
                            </div>
                        </div>
                        <div className="row mb-3">

                            <div className="col-sm-12">
                                <textarea className="form-control" placeholder="Descripción..."></textarea>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <Form.Select aria-label="Default select example">
                                    <option>-- Frecuencia de publicación --</option>
                                    <option value="1">1 Hora</option>
                                    <option value="2">4 Horas</option>
                                    <option value="3">6 Horas</option>
                                </Form.Select>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Selecciona los tweets a publicar</h5>
                        <p className="card-text">
                            <div className="row mb-3">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Ingresa una idea para tus tweets" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button className="btn btn-outline-primary" type="button" id="button-addon2">Buscar...</button>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-sm-12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                        <label className="form-check-label" htmlFor="gridCheck1">
                                            Example checkbox
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                        <label className="form-check-label" htmlFor="gridCheck1">
                                            Example checkbox
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                        <label className="form-check-label" htmlFor="gridCheck1">
                                            Example checkbox
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                        <label className="form-check-label" htmlFor="gridCheck1">
                                            Example checkbox
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </p>
                    </div>
                </div>

                <div className="row mb-3">


                </div>

                <div className="row mb-3">

                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">Registrar Credenciales</button>
                    </div>
                </div>

            </form>

        </>
    )
}
