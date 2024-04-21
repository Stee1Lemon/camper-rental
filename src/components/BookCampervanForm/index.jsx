import { Button, Input } from 'components/CommonElements';
import {
  CommentInput,
  FormField,
  InputsField,
  Message,
} from './BookCampervanForm.styled';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.module.css';
import { date, object, string } from 'yup';
import { useFormik } from 'formik';
import Notiflix from 'notiflix';

const BookCampervanForm = () => {
  const bookingSchema = object({
    name: string().required(),
    email: string().email().required(),
    date: date().required(),
    comment: string(),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      date: '',
      comment: '',
    },
    validationSchema: bookingSchema,
    onSubmit: async (values) => {
      // const result = await dispatch(axios(values))
      // if (result.error) return Notiflix.Notify.failure(result.payload);
      formik.resetForm();
      Notiflix.Notify.success('Thank you for your contact');
    },
  });

  return (
    <FormField onSubmit={formik.handleSubmit}>
      <h3>Book your campervan now</h3>
      <p>Stay connected! We are always ready to help you.</p>
      <InputsField>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          style={{
            border:
              formik.errors.name && formik.touched.name
                ? '1px solid var(--third-color)'
                : null,
          }}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          style={{
            border:
              formik.errors.email && formik.touched.email
                ? '1px solid var(--third-color)'
                : null,
          }}
        />
        <ReactDatePicker
          selected={formik.values.date}
          onChange={(date) => formik.setFieldValue('date', date)}
          placeholderText="Booking date"
          dateFormat="dd-MM-yyyy"
          minDate={new Date()}
          customInput={
            <Input
              name="date"
              value={formik.values.date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              readOnly={true}
              style={{
                border:
                  formik.errors.name && formik.touched.name
                    ? '1px solid var(--third-color)'
                    : null,
              }}
            />
          }
        />
        <CommentInput
          type="text"
          name="comment"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.comment}
          placeholder="Comment"
        />
        {Object.keys(formik.errors).length > 0 && formik.touched ? (
          <Message>Name, email, date is required</Message>
        ) : null}
      </InputsField>

      <Button type="submit">Send</Button>
    </FormField>
  );
};

export default BookCampervanForm;
