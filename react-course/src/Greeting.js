export function Greeting(props){
    return <h1>{props.title}</h1>
}

export  function UserCard(){
    const user = {
        firstName: "Yoho",
        lastName: "Vargas"
    }
    return <div>
        <h1>{user.firstName}</h1>
        <h3>{user.lastName}</h3>
    </div> 
}