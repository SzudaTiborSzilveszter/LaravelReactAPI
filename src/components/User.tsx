import type { userType } from "../types/userType";

interface UserProps{
    user: userType
}

function User({user}: UserProps){
    return(
        <div className="flex flex-wrap text-center p-4 m-auto object-contain border">
            <p>{user.name}</p>
            <p>{user.email}</p>
        </div>
    )
}

export default User