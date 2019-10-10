import React, {Component} from "react";
import axios from "axios";

export default class Post extends Component{
    state = {
        post : []
    }
    componentDidMount(){
       let id = this.props.match.params.id;
        axios.get("https://jsonplaceholder.typicode.com/posts/"+id).then(
        (res)=>{
            this.setState({
                post : res.data
            });
        }
        );
    }
    render(){
        return(
            <div className="posts">
                <div className="post">
                    <h1>
                   {this.state.post.title}
                </h1>
                <p>
                    {this.state.post.body}
                </p>
                </div>
            </div>
        );
    }
}





















