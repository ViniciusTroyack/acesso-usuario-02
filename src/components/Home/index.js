import { members } from "../Members"
import { Link } from "react-router-dom"

const Home = () => {

    return (<>
        {members.map((member) => <Link to={member.type === 'pj' ? `/company/${member.id}` : `/customer/${member.id}`}>{member.name}</Link>)}
    </>)
}

export default Home