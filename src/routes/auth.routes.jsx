import { Routes, Route } from 'react-router-dom';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  )
}

//* Esse "AuthRoutes" seria uma rota alternativa à rota banal? E outra, essa rota banal seria a "AppRoutes"?
//* Essa rota, então, não faz parte do banco de dados que já existe no site em questão? E por isso ela é "Auth[...]"?
//* "Auth" = "Autorização" => Seria um tipo de "autorização" pra ter acesso ao site então?