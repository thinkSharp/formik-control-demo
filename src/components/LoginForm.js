import React from 'react'
import {Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function LoginForm({toMessage, onFromMessage}) {
    const initialValue ={
        message: '',
        email: '',
        password: ''
    }
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid Format').required('Required'),
        password: Yup.string().required('Required')
    })

    const onSubmit = values => {
        console.log('Form Data', values)
        onFromMessage(values.message)
    }

    return (
        <Formik
            initialValues = {initialValue}
            validationSchema = {validationSchema}
            onSubmit = {onSubmit}
        >
            {
                formik => {
                    return <Form>
                        <FormikControl control='input' label={toMessage} name='message' />
                        <FormikControl control='chakrainput' type='email' label = 'Email' name = 'email' />
                        <FormikControl control='chakrainput' type='password' label = 'Password' name='password' />
                        <button type='submit' disabled={!formik.isValid}>Submit</button>
                    </Form>
                }
            }
        </Formik>
    )
}

export default LoginForm
