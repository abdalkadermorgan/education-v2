import React from 'react';
import { Formik, Field, Form } from 'formik';
import { render } from '@testing-library/react';

const FourmCourse = () => (
  <div>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <Field id="courseTitle" name="cTitle" placeholder="Title" />

        <Field id="category" name="category" placeholder="Category" />

        <Field
          id="price"
          name="price"
          placeholder="Price"
          type="number"
        />

        <Field
          id="discount"
          name="discount"
          placeholder="Discount"
          type="number"
        />

        <Field
          as="textarea"
          id="discrption"
          name="discrption"
          placeholder="Discription"
          type="number"
          
        />

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

// render(<FourmCourse />);

export default FourmCourse;