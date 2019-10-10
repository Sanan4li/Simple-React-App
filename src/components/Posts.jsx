import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
export default class Posts extends Component {
    state = {
        posts : []
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts").then(
          (res)=>{
               this.setState({
                   posts : res.data.slice(0,20)
               });
         
          }
            
        );
    }
    render(){
        let PostsList = this.state.posts.map(
            (post)=>{
                return(
                        <div key={post.id} className="post">
                            <h2> {post.title} </h2>
                            <p>
                                {post.body}
                            </p>
                            <Link to={"/post/"+post.id}>Read Full Post</Link>
                        </div>
                );
            }
        );
        return(
        <div className="center">
          {PostsList}
        </div>
        );
    }
}



















