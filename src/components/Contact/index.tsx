import { useState } from 'react';
import { useInput } from '../../hooks/useInput';
import { BtnGroup } from '../../styles/Global';
import { isEmail, isNotEmpty } from '../../util/validation';
import { Button } from '../ui/Button';
import Input from '../ui/Input';
import { ContactWrapper, ContactWrapper1, Controls, ControlsWrapper, TextArea } from './style';

const Contact: React.FC = () => {
  const {
    value: fullNameValue,
    handleInputChange: handleFullNameChange,
    handleInputBlur: handleFullNameBlur,
    hasError: fullNameIsInvalid,
  } = useInput('', value => isNotEmpty(value));

  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailIsInvalid,
  } = useInput('', value => isEmail(value) && isNotEmpty(value));

  const {
    value: phoneValue,
    handleInputChange: handlePhoneChange,
    handleInputBlur: handlePhonelBlur,
    hasError: phoneIsInvalid,
  } = useInput('', value => isNotEmpty(value));

  const [message, setMessage] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (fullNameIsInvalid || emailIsInvalid || phoneIsInvalid) {
      return;
    }

    console.log('HTTP REQUEST', { fullNameValue, emailValue, phoneValue, message });
  }

  return (
    <ContactWrapper id='contact'>
      <ContactWrapper1>
        <h2>Написати Нам:</h2>
        <form
          style={{ width: '100%' }}
          onSubmit={handleSubmit}
        >
          <ControlsWrapper>
            <Controls>
              <Input
                id='full-name'
                type='text'
                label="Прізвище Ім'я"
                name='full-name'
                value={fullNameValue}
                onChange={handleFullNameChange}
                onBlur={handleFullNameBlur}
                // error={fullNameIsInvalid && 'Please enter a valid name'}
              />
              <Input
                id='email'
                type='email'
                label='Email'
                name='email'
                value={emailValue}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                error={emailIsInvalid && 'Please enter a valid email address'}
              />
              <Input
                id='phone'
                type='text'
                label='Контактний номер'
                name='phone'
                value={phoneValue}
                onChange={handlePhoneChange}
                onBlur={handlePhonelBlur}
                // error={phoneIsInvalid && 'Please enter a valid email address'}
              />
            </Controls>
            <Controls>
              <TextArea
                name='message'
                id='message'
                value={message}
                placeholder='Напишіть ваше повідомлення...'
                data-gramm='false'
                data-gramm_editor='false'
                data-enable-grammarly='false'
                onChange={e => setMessage(e.target.value)}
              />
            </Controls>
          </ControlsWrapper>
          <BtnGroup $justifyContent='end'>
            <Button>Відправити</Button>
          </BtnGroup>
        </form>
      </ContactWrapper1>
    </ContactWrapper>
  );
};

export default Contact;
