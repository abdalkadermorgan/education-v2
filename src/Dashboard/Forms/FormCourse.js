import React from 'react';
import { Formik, Field, Form } from 'formik';

const FormCourse = (props) => {

  
  return (
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
        <Form onSubmit={
        (a) => {
          console.log(a);
          props.getData(a);
        }}>
          <Field 
          id="courseTitle" 
          name="cTitle" 
          placeholder="Title" 
          // onChange={(e) => setState((s) => ({ ...s, title: e.target.value }))}
					// 	value={state.title}
          />

          <Field 
          id="category" 
          name="category" 
          placeholder="Category" 
          // onChange={(e) =>
          //   setState((s) => ({ ...s, catigory: e.target.value }))
          // }
          // value={state.catigory}
          />

          <Field
            id="price"
            name="price"
            placeholder="Price"
            type="number"
            // onChange={(e) => setState((s) => ({ ...s, price: parseInt(e.target.value) }))}
						// value={state.price}
          />

          <Field
            id="discount"
            name="discount"
            placeholder="Discount"
            type="number"
            // onChange={(e) =>
						// 	setState((s) => ({ ...s, discount: e.target.value }))
						// }
						// value={state.discount}
          />

          <Field
            as="textarea"
            id="discrption"
            name="discrption"
            placeholder="Discription"
            type="number"
            // onChange={(e) =>
						// 	setState((s) => ({ ...s, description: e.target.value }))
						// }
						// value={state.description}

          />

          <Field
            id="img"
            name="img"
            placeholder="URL Image"
            type="text"
            // onChange={(e) =>
						// 	setState((s) => ({ ...s, urlImg: e.target.value }))
						// }
						// value={state.urlImg}
          />
        </Form>
      </Formik>
    </div>

  )
}



export default FormCourse;