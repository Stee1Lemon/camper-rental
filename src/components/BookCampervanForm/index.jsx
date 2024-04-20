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

const BookCampervanForm = () => {
  const bookingSchema = object({
    name: string().required(),
    email: string().email().required(),
    date: date().required(),
    comment: string(),
  });

  const formic = useFormik({
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
      console.log(values);
    },
  });

  return (
    <FormField onSubmit={formic.handleSubmit}>
      <h3>Book your campervan now</h3>
      <p>Stay connected! We are always ready to help you.</p>
      <InputsField>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          onChange={formic.handleChange}
          onBlur={formic.handleBlur}
          value={formic.values.name}
          style={{
            border:
              formic.errors.name && formic.touched.name
                ? '1px solid var(--third-color)'
                : null,
          }}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          onChange={formic.handleChange}
          onBlur={formic.handleBlur}
          value={formic.values.email}
          style={{
            border:
              formic.errors.email && formic.touched.email
                ? '1px solid var(--third-color)'
                : null,
          }}
        />
        <ReactDatePicker
          selected={formic.values.date}
          onChange={(date) => formic.setFieldValue('date', date)}
          placeholderText="Booking date"
          dateFormat="dd-MM-yyyy"
          minDate={new Date()}
          customInput={
            <Input
              name="date"
              value={formic.values.date}
              onChange={formic.handleChange}
              onBlur={formic.handleBlur}
              readOnly={true}
              style={{
                border:
                  formic.errors.name && formic.touched.name
                    ? '1px solid var(--third-color)'
                    : null,
              }}
            />
          }
        />
        <CommentInput
          type="text"
          name="comment"
          onBlur={formic.handleBlur}
          onChange={formic.handleChange}
          value={formic.values.comment}
          placeholder="Comment"
        />
        {Object.keys(formic.errors).length > 0 && formic.touched ? (
          <Message>Name, email, date is required</Message>
        ) : null}
      </InputsField>

      <Button type="submit">Send</Button>
    </FormField>
  );
};

export default BookCampervanForm;
