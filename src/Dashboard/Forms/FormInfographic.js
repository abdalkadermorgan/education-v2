import React from 'react';
import { Formik, Field, Form } from 'formik';

const FormInfographic = () => (
  <div>
    <Formik
      initialValues={{

      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <Field
          id="students"
          name="students"
          placeholder="Students Enrolled"
          type="number"
        />

        <Field
          id="courses"
          name="courses"
          placeholder="Online Available Courses"
          type="number"
        />

        <Field
          id="quality"
          name="quality"
          placeholder="Premium Quality Products"
          type="number"
          
        />

        <Field
          id="teachers"
          name="teachers"
          placeholder="Teachers Registered"
          type="number"
        />
      </Form>
    </Formik>
  </div>
);

// render(<FormInfographic />);

export default FormInfographic;