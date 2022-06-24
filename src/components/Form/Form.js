import React, {useState} from 'react';
import {
  FormColumn,
  FormWrapper,
  FormInput,
  FormSection,
  FormRow,
  FormLabel,
  FormInputRow,
  FormMessage,
  FormButton,
  FormTitle,
} from './FormStyles';
import {Container} from '../../globalStyles';
import validateForm from './validateForm';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [textBox, setTextBox] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    const resultError = validateForm({name, email, textBox});

    if (resultError !== null) {
      setError(resultError);
      return;
    }
    setName('');
    setEmail('');
    setTextBox('');
    setError(null);
    setSuccess('הטופס נשלח!');
  };

  const messageVariants = {
    hidden: {y: 30, opacity: 0},
    animate: {y: 0, opacity: 1, transition: {delay: 0.2, duration: 0.4}},
  };

  const formData = [
    {
      label: 'שמך',
      value: name,
      onChange: e => setName(e.target.value),
      type: 'text',
    },
    {
      label: 'המייל',
      value: email,
      onChange: e => setEmail(e.target.value),
      type: 'email',
    },
    {
      label: 'הבקשה',
      value: textBox,
      onChange: e => setTextBox(e.target.value),
      type: 'textBox',
    },
  ];
  return (
    <FormSection>
      <Container>
        <FormRow>
          <FormColumn small>
            <FormTitle>בקשה מהרב</FormTitle>
            <FormWrapper onSubmit={handleSubmit}>
              {formData.map((el, index) => (
                <FormInputRow key={index}>
                  <FormLabel>{el.label}</FormLabel>
                  <FormInput
                    type={el.type}
                    placeholder={`הכנס את  ${el.label.toLocaleLowerCase()}`}
                    value={el.value}
                    onChange={el.onChange}
                  />
                </FormInputRow>
              ))}

              <FormButton type="submit">בקש מהרב</FormButton>
            </FormWrapper>
            {error && (
              <FormMessage
                variants={messageVariants}
                initial="hidden"
                animate="animate"
                error>
                {error}
              </FormMessage>
            )}
            {success && (
              <FormMessage
                variants={messageVariants}
                initial="hidden"
                animate="animate">
                {success}
              </FormMessage>
            )}
          </FormColumn>
        </FormRow>
      </Container>
    </FormSection>
  );
};

export default Form;
