import React from "react";

function ShowStudents(props){
        console.log(props.Students);
        let List  = props.Students.map(s=>{
            return (
                    <ul key={s.id}>
                        <li>{s.name}</li>
                        <li>{s.city}</li>
                        <li>{s.department}</li>
                        <li><button onClick={()=>{props.delete(s.id)}}>Delete</button></li>
                    </ul>
            );
        });
        return(
           <div>
               <h1>All Students</h1>
                {List}
           </div>
        );
    
}

export default ShowStudents;









