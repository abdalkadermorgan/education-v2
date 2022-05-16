import React from 'react';
import { Formik, Field, Form } from 'formik';

const FourmCourse = () => (
  <div>
    <Formik
      initialValues={{
        slideTitle: '',
        img: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <Field id="slideTitle" name="slideTitle" placeholder="Title" />

        <Field
          id="img"
          name="img"
          placeholder="URL Image"
          type="text"
        />
      </Form>
    </Formik>
  </div>
);


export default FourmCourse;