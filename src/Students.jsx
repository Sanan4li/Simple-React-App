import React, { Component } from "react";
import ShowStudents from "./ShowStudents";
import AddStudent from "./AddStudent";
class Students extends Component{
    
    
    state = {
        students : [
           {id:1, name : "Sanan" , city : "Kotla " , department : "Software Engineering"} , 
           {id:2, name : "Ali" , city : "Gujrat " , department : "Software Engineering"} , 
           {id:3, name : "Qasim" , city : "Gujrat " , department : "Computer Science"}  
        ]
    }
    
    
    
    AddNew = (NewStudent)=>{
       let OldList = [... this.state.students];
        console.log(OldList);
        OldList.push(NewStudent);
        console.log(OldList);
        this.setState({
            students : OldList
        });
    }
    
    delete = (id)=>{
        console.log(id);
        let OldList = [... this.state.students];
     let NewList =   OldList.filter(idd=>{
            return id!=idd.id
        });
       this.setState({
           students : NewList 
       });
    }
    
    render(){
        return(
            <div>
                <ShowStudents Students={this.state.students} delete={this.delete} />
                 <AddStudent Add={this.AddNew} />
            </div>
        );
    }
    
}
export default Students;





