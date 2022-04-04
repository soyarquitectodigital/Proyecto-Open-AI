
import FormLogin from "../components/FormLogin";
import { authRedirect } from "../hooks/authUser";



export default function Home() {

  authRedirect()
 
  return (
    <>
      <main>
        <FormLogin />
      </main>
    </>
  )
}
