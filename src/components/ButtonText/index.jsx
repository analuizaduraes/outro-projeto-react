import { Container } from './styles';

export function ButtonText({ title, isActive = false, ...rest }) {
  return (
    <Container
      type="button"
      $isActive={isActive.toString()}
      {...rest}
    >
      {title}
    </Container>
  )
}

//* UserActivation: isActive property (?)
//* "$is(a)ctive" (antes) x "$is(A)ctive" (depois) (?)