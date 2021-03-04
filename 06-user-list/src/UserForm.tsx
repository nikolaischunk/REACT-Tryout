import { ErrorMessage, Formik, FormikProps, yupToFormErrors } from "formik";
import React from "react";
import { Button, Form, ListGroup } from "react-bootstrap";
import "./css/style.css";
import IUser from "./IUser";
import * as yup from "yup";

export default function UserForm() {
  const schema = yup.object().shape({
    id: yup.number(),
    firstname: yup.string(),
    lastname: yup.string(),
    adress: yup.string(),
    plz: yup.number(),
    city: yup.string(),
  });
  function handleSubmit(event: any) {
    const data = new FormData(event.target);

    const firstname = data.get("firstname");
    const lastname = data.get("lastname");
    const adress = data.get("adress");
    const plz = data.get("plz");
    const city = data.get("city");
  }
  return (
      <Formik
        initialValues={{ firstname: "", lastname: "", adress: "", city: "" }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));

            setSubmitting(false);
          }, 400);
        }}
      >
        {(props: FormikProps<IUser>) => (
          <Form>
            <ListGroup.Item
              as="input"
              name="firstname"
              placeholder="Firstname"
            ></ListGroup.Item>
            <ErrorMessage component="div" name="firstname" />
            <ListGroup.Item
              as="input"
              name="lastname"
              placeholder="Lastname"
            ></ListGroup.Item>
            <ErrorMessage component="div" name="lastname" />
            <ListGroup.Item
              as="input"
              name="adress"
              placeholder="Adress"
            ></ListGroup.Item>
            <ErrorMessage component="div" name="adress" />
            <ListGroup.Item
              as="input"
              name="plz"
              placeholder="PLZ"
            ></ListGroup.Item>
            <ErrorMessage component="div" name="plz" />
            <ListGroup.Item
              as="input"
              name="city"
              placeholder="City"
            ></ListGroup.Item>
            <ErrorMessage component="div" name="city" />
            <Button
              as="input"
              type="submit"
              value="Submit"
              onClick={handleSubmit}
            />
          </Form>
        )}
      </Formik>
  );
}
