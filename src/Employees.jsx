import React, {Component} from "react";
import ShowEmployees from "./ShowEmployees";
import AddEmployee from "./AddEmployee";
export default class Employees extends Component{
    
    state = {
        employees : [
              {id:1, name : "Sanan" , city : "Kotla " , department : "Software Engineering"} , 
           {id:2, name : "Ali" , city : "Gujrat " , department : "Software Engineering"} , 
           {id:3, name : "Qasim" , city : "Gujrat " , department : "Computer Science"}  
        ]
       
    }
    addNewEmployee = (data)=>{
      
        data.id = Math.floor((Math.random() * 100) + 1);
        let newData = [...this.state.employees , data];
        this.setState({
            employees : newData
        });
    }
    
    deleteEmployee = (id)=>{
        let newData = this.state.employees.filter(
            (d)=>{
                return d.id!==id
            }
        );
        this.setState({
            employees : newData
        });
    }
    
    
    
    render(){
        return(
            <div>
            <ShowEmployees employees={this.state.employees} deleteEmployee={this.deleteEmployee} />
             <AddEmployee addNew={this.addNewEmployee} />
             </div>
        );
    }
}












