import {
  Page,
  Card,
  FormLayout,
  TextField,
  Button,
  Form,
  Text,
} from "@shopify/polaris";
import * as Yup from "yup";
import { useFormik } from "formik";
import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [message, setMessage] = useState(null);
  const formik = useFormik({
    initialValues: {
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Required!"),
      subject: Yup.string()
        .min(10, "Mininum 2 characters")
        .max(150, "Maximum 150 characters")
        .required("Required!"),
      message: Yup.string()
        .min(10, "Mininum 10 characters")
        .required("Required!"),
    }),
    onSubmit: (value, { resetForm }) => {
      setMessage(null);
      axios
        .post("https://testapi.io/api/anhez/contact-us", value)
        .then((res) => {
          setMessage(res.data.msg);
          //   console.log(res.data.msg);
        })
        .catch((err) => {
          setMessage(err.data.msg);
        });
      resetForm();
    },
  });

  // const showAlert = ()=> {
  //    if(message === "Test Article Two") {
  //   document.getElementsByClassName('contact-form_header"').style.display = 'block';
  //     }else {
  //         document.getElementsByClassName('contact-form_header"').style.display = 'none';
  //     }

  return (
    <Page fullWidth>
      <Card sectioned>
        <Form onSubmit={formik.handleSubmit}>
          <div tone="success">
            {message ? (
              <div style={{ margin: "0 0 20px 0 ", fontSize: "15px" }}>
                <Text tone="success" fontWeight="medium">
                  {message}
                </Text>{" "}
                <hr />
              </div>
            ) : (
              <div id="contact-form_header">
                <p>
                  Don't hesitate to contact us if you face any problem or have
                  any question about the app. We are happy to help you.
                </p>
                <p style={{ marginTop: "15px" }}>
                  Please give us permission to access your Shopify admin. So we
                  could <b>Online Store {"->"} Themes </b>. Our email address
                  for creating staff account is:
                  <b>contact@globosoftware.net</b>
                </p>
              </div>
            )}
          </div>

          <FormLayout>
            <TextField
              type="email"
              name="email"
              label="Account email"
              value={formik.values.email}
              onChange={(value) =>
                formik.handleChange({ target: { id: "email", value } })
              }
              autoComplete="email"
              error={
                formik.errors.email &&
                formik.touched.email && (
                  <Text as="p" tone="critical">
                    {formik.errors.email}
                  </Text>
                )
              }
            />
            <TextField
              label="Subject"
              name="subject"
              value={formik.values.subject}
              onChange={(value) =>
                formik.handleChange({ target: { id: "subject", value } })
              }
              autoComplete="off"
              error={
                formik.errors.subject &&
                formik.touched.subject && (
                  <Text as="p" tone="critical">
                    {formik.errors.subject}
                  </Text>
                )
              }
            />
            <TextField
              label="Message"
              name="message"
              value={formik.values.message}
              type="text"
              onChange={(value) =>
                formik.handleChange({ target: { id: "message", value } })
              }
              multiline={4}
              error={
                formik.errors.message &&
                formik.touched.message && (
                  <Text as="p" tone="critical">
                    {formik.errors.message}
                  </Text>
                )
              }
            />
            <Button variant="primary" tone="success" submit={true}>
              Send
            </Button>
          </FormLayout>
        </Form>
      </Card>
    </Page>
  );
};

export default Contact;
