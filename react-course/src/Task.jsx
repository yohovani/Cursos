import './Task.css'
export function TaskCard({ready = true}) {
    return <div className="card">
        <h1 >Mi primer Task</h1>
        {/**<span style={ready ? {background: "green"} : {background: "red"}}></span> */ }
        <span className={ready ? "bg-green" : "bg-red"}>
            {ready ? "Tarea Realizada" : "Tarea No realizada"}</span>
    </div>
}