import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { members } from "../../components/Members";

const Customer = () => {
    const params = useParams()

    const member = members.find((item) => { return item.id === params.id })

    return (<div>
        <h1>Detalhes do cliente</h1>

        <p>
            Nome: {member && member.name}
        </p>

        <Link to="/">
            Voltar
        </Link>
    </div>
    )
}

export default Customer;