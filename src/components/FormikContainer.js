import react from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function FormikContainer() {
    const initialValues = {}
    const validationSchema = Yup.object({})
    const onSubmit = values => console.log('form data', values)
    return(
        <Formik initialValues = {initialValues}
                validationSchema = {validationSchema}
                onSubmit = {onSubmit}
                >
            {
                formik => <form>
                    <FormikControl
                        control='input'
                        type='email'
                        label='Email'
                        name='email'
                    />
                    <button type='submit'>Registrar</button>
                </form>
            }

        </Formik>
    )
}

export default FormikContainer