import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

interface TransactionValue {
  user_id: number;
  type: string;
  amount: number;
}

const TransactionSchema = Yup.object().shape({
  user_id: Yup.number().required("Input user id"),
  type: Yup.string().required("Input type"),
  amount: Yup.number().required("Input amount"),
});

const NewTransaction: React.FC = () => {
  const navigate = useNavigate();

  const handleAddTransaction = async (values: TransactionValue) => {
    const apiUrl = "https://mock-api.arikmpt.com/api/category/create";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(values),
      });
      const data = await response.json();
      console.log(data);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="row justify-content-center align-items-center"
      style={{ minHeight: "100vh", maxWidth: "50vh"}}
    >
      <Formik
        initialValues={{
          user_id: 1,
          type: "",
          amount: 1

        }}
        validationSchema={TransactionSchema}
        onSubmit={handleAddTransaction}
      >
        <Form>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Name
            </label>
            <Field
              name="name"
              type="name"
              className="form-control"
              id="exampleInpuName"
            />
            <ErrorMessage name="name" />
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="submit">
              Add
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default NewTransaction
