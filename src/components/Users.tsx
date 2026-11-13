import { useUserContext } from "../contexts/UserContext";
import User from "./User";

function Users(){
    const {usersList, load, error}= useUserContext();

    if(load){
        return(
            <p>
                Termékek betöltése
            </p>
        )
    }
    if(error){
        return(
            <p>
                {error}
            </p>
        )
    }
    return(
        <div className="flex flex-wrap gap-2">
            {usersList.map((user) => (
                <User user={user} key={user.id} />
            ))}
        </div>
    )
}

export default Users