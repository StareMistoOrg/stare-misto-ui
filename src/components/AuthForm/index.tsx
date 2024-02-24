import { Form } from 'react-router-dom';
import Input from '../ui/Input';
import { AuthFormContainer, AuthFormWrapper } from './styles';
import { BtnGroup } from '../../styles/Global';
import { Button } from '../ui/Button';

const AuthForm = () => (
  <AuthFormWrapper>
    <AuthFormContainer>
      <Form style={{ width: '100%' }}>
        <h1>Вхід Адміністратора</h1>
        <Input
          id='email'
          type='email'
          label='email'
          name='email'
          value=''
          onChange={() => {}}
          onBlur={() => {}}
        />
        <Input
          id='password'
          type='password'
          label='password'
          name='email'
          value=''
          onChange={() => {}}
          onBlur={() => {}}
        />
        <BtnGroup>
          <Button>Відмінити</Button>
          <Button>Вхід</Button>
        </BtnGroup>
      </Form>
    </AuthFormContainer>
  </AuthFormWrapper>
);

export default AuthForm;
