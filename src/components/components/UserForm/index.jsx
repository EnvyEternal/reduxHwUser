import React from 'react';
import {Formik, Form, Field} from 'formik';
import { connect } from 'react-redux';
import { createUser } from '../../actions/index';

const UserForm = (props) => {
    const {createUserAction} = props;
    const initialUserValues = {
        emailUser: '',
        passwordUser: '',
    };
    const submitHandler = (values, formikBag) => {
        createUserAction(values);
        formikBag.resetForm();
    };
    return(
        <Formik initialValues={initialUserValues} onSubmit={submitHandler}>
            {formikProps => {
                return(
                <Form>
                    <Field name="emailUser" />
                    <Field name="passwordUser" />
                    <button type='submit'>Add user</button>
                </Form>
                );
        }}
        </Formik> 
    );
}
const mapStateToProps = state => state.userReducerStates;

 const mapDispatchToProps = dispatch => {
     return{
         createUserAction: data => {
             dispatch(createUser(data));
         }
     };
 };

export default connect(mapStateToProps, mapDispatchToProps) (UserForm);