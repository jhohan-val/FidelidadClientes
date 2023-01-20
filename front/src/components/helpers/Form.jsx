import { useState, useEffect } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from "formik";

const uriMarcas = "http://localhost:2002/marcas";
const uriDocumentos = "http://localhost:2002/documentos";
const uriDepartamentos = "http://localhost:2002/departamentos";
const uriPaises = "http://localhost:2002/paises";
const uriCiudades = "http://localhost:2002/ciudades";

const formulario = () => {
    const [datosMarcas, setDatosMarcas] = useState([]);
    const getMarcas = async () => {
        const resultado = await axios.get(uriMarcas);
        setDatosMarcas(resultado.data)
        console.log(resultado.data)
    }
    const [datosDocumentos, setDatosDocumentos] = useState([]);
    const getDocumentos = async () => {
        const resultado = await axios.get(uriDocumentos);
        setDatosDocumentos(resultado.data)
        console.log(resultado.data)
    }
    const [datosDepartamentos, setDatosDepartamentos] = useState([]);
    const getDepartamentos = async () => {
        const resultado = await axios.get(uriDepartamentos);
        setDatosDepartamentos(resultado.data)
        console.log(resultado.data)
    }
    const [datosPaises, setDatosPaises] = useState([]);
    const getPaises = async () => {
        const resultado = await axios.get(uriPaises);
        setDatosPaises(resultado.data)
        console.log(resultado.data)
    }
    const [datosCiudades, setDatosCiudades] = useState([]);
    const getCiudades = async () => {
        const resultado = await axios.get(uriCiudades);
        setDatosCiudades(resultado.data)
        console.log(resultado.data)
    }
    useEffect(() => {
        getMarcas()
        getDocumentos()
        getDepartamentos()
        getPaises()
        getCiudades()
    }, [])
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
    return (
        <section className="contenedor">
            <section className="registro">
                <h1>Formulario de inscripción</h1>
                <Formik
                    initialValues={{
                        nombre: '',
                        apellido: '',
                        N_Documento: '',
                        fechaDeNacimiento: '',
                        Direccion: '',
                        tipo_documento: '',
                        departamento: '',
                        pais: '',
                        ciudad: '',
                        marca: ''
                    }}
                    validate={(valores) => {
                        let errores = {};
                        if (!valores.nombre) {
                            errores.nombre = 'por favor ingresa un nombre'
                        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                            errores.nombre = 'El nombre solo puede contener letras y espacion'
                        }
                        if (!valores.apellido) {
                            errores.apellido = 'por favor ingresa tus apelllidos'
                        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)) {
                            errores.apellido = 'Los apellidos solo puede contener letras y espacion'
                        }
                        if (!valores.N_Documento) {
                            errores.N_Documento = 'por favor ingresa tu numero de identidad'
                        } else if (!/^-?\d+\.?\d*$/.test(valores.N_Documento)) {
                            errores.N_Documento = 'El nombre de identificacion solo puede contener numeros'
                        }
                        if (!valores.fechaDeNacimiento) {
                            errores.fechaDeNacimiento = 'Por favor selecciona una fecha'
                        }
                        if (!valores.Direccion) {
                            errores.Direccion = 'Por favor ingresa una direccion'
                        }
                        if (!valores.tipo_documento) {
                            errores.tipo_documento = 'Por favor selecciona un tipo de identificaion'
                        }
                        if (!valores.departamento) {
                            errores.departamento = 'Por favor selecciona un departamento'
                        }
                        if (!valores.pais) {
                            errores.pais = 'Por favor selecciona un pais'
                        }
                        if (!valores.ciudad) {
                            errores.ciudad = 'Por favor selecciona una ciudad'
                        }
                        if (!valores.marca) {
                            errores.marca = 'Por favor selecciona una marca'
                        }
                        return errores;
                    }}
                    onSubmit={(valores, { resetForm }) => {
                        resetForm();
                        console.log('Formulario enviado');
                        cambiarFormularioEnviado(true);
                        setTimeout(() => cambiarFormularioEnviado(false), 2000);
                    }}>
                    {({ errors }) => (
                        <Form>
                            <section className="formulario">
                                <fieldset>
                                    <Field className="form-item" name="nombre" placeholder="Nombre" type="text" />
                                    <ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
                                    <Field name="tipo_documento" id="tipo-documento" as="select">
                                        <option value="TD">Tipo de documento</option>
                                        {datosDocumentos.map((documento) => (
                                            <option value={documento.tipo_documento} key={documento.id}> {documento.tipo_documento} </option>
                                        ))}
                                    </Field>
                                    <ErrorMessage name="tipo_documento" component={() => (<div className="error">{errors.tipo_documento}</div>)} />
                                    <Field className="form-item" name='fechaDeNacimiento' type="date" />
                                    <ErrorMessage name="fechaDeNacimiento" component={() => (<div className="error">{errors.fechaDeNacimiento}</div>)} />
                                    <Field name="departamento" id="departamento" as="select">
                                        <option value="">Departamento</option>
                                        {datosDepartamentos.map((departamento) => (
                                            <option value={departamento.departamento} key={departamento.id}> {departamento.departamento} </option>
                                        ))}
                                    </Field>
                                    <ErrorMessage name="departamento" component={() => (<div className="error">{errors.departamento}</div>)} />
                                    <Field className="form-item" name='Direccion' placeholder="Direccion" type="text" />
                                    <ErrorMessage name="Direccion" component={() => (<div className="error">{errors.Direccion}</div>)} />
                                </fieldset>
                                <fieldset>
                                    <Field className="form-item" name="apellido" placeholder="Apellido" type="text" />
                                    <ErrorMessage name="apellido" component={() => (<div className="error">{errors.apellido}</div>)} />
                                    <Field className="form-item" name='N_Documento' placeholder="N.Documento" type="text" />
                                    <ErrorMessage name="N_Documento" component={() => (<div className="error">{errors.N_Documento}</div>)} />
                                    <Field name="pais" id="pais" as="select">
                                        <option value="">Pais</option>
                                        {datosPaises.map((pais) => (
                                            <option value={pais.pais} key={pais.id}> {pais.pais} </option>
                                        ))}
                                    </Field>
                                    <ErrorMessage name="pais" component={() => (<div className="error">{errors.pais}</div>)} />
                                    <Field name="ciudad" id="ciudad" as="select">
                                        <option value="">Ciudad</option>
                                        {datosCiudades.map((ciudad) => (
                                            <option value={ciudad.ciudad} key={ciudad.id}> {ciudad.ciudad} </option>
                                        ))}
                                    </Field>
                                    <ErrorMessage name="ciudad" component={() => (<div className="error">{errors.ciudad}</div>)} />
                                    <Field name="marca" id="marca" as="select">
                                        <option value="">Marca</option>
                                        {datosMarcas.map((marca) => (
                                            <option value={marca.nombre_marca} key={marca.id}> {marca.nombre_marca} </option>
                                        ))}
                                    </Field>
                                    <ErrorMessage name="marca" component={() => (<div className="error">{errors.marca}</div>)} />
                                </fieldset>
                            </section>
                            <button className="ov-btn-grow-skew" type="submit">enviar</button>
                            {formularioEnviado && <p className="exito">Formulario enviado con exito</p>}
                        </Form>
                    )}
                </Formik>
            </section>
        </section>
    )
}

export default formulario 