import { Container } from './styles';

export function Textarea({ value, ...rest }) {
  return (
    <Container {...rest}>
      {value}
    </Container>
  )
}

//* Esse "value" é apenas uma variável qualquer? Me perdi nisso! (?)