import React from "react";
import './Index.css'
import CriaAnuncioForm from "../../components/CriaAnuncioForm";
import { useFormik } from 'formik'
import { Header, Footer } from "../../components";


export function Cadastro () {

  const formik = useFormik({})

  return (
    <div>
      <CriaAnuncioForm/>
    </div>
  )
};

export default Cadastro