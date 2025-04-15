import { Container } from './styles';

export function Button({ title, loading = false, ...rest }) {
  return (
    <Container type="button" disabled={loading} {...rest}>

      {loading ? 'Carregando...' : title}
    </Container >
  )
}



//Propriedades devem ser passadas dentro dos parâmetros, ou seja, como parâmetros, e vão assim: Function({bucetinha_larga})
//Autocomplete: VSCode faz isso quando a importação é nomeada
//"If ternário"/"Operador ternário": depois procure uma explicação melhor mesmo pra isso
/*"Pq o X ternário" vai DENTRO DA TAG <Container></Container> e não NA TAG <Container></Container>? Basicamente, pq as outras
coisas são propriedades "menos visíveis" do Button, o X ternário já é algo que vai ser mostrado no title, que é uma propriedade
"mais visual e mais visível" mesmo*/