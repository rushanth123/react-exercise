import React,{ Component } from "react"

class Counter extends Component {
    state ={
        count:0,
        tags:["tag1","tag2","tag3"]
        // imgUrl:"http://picsum.photos/200"
    };
   
    render(){
            let classes = "badge m-2 badge-";
            classes += this.state.count === 0 ? "warning" : "primary"
        return ( <div>
            
            <img src={this.state.imgUrl}  alt =''/>
        <span className={classes} style= {{fontSize:20}} > { this.formatCount()}</span>
         <button className="btn btn-secondary" >increment</button>
         {this.renderTag()}
         </div>);
    }

    renderTag(){
        if (this.state.tags.length===0 ) {
            return <p>no tags here</p>
        };
        return <ul>{this.state.tags.map(tag=><li>{tag}</li>)}</ul>
    }
    formatCount(){
        const {count} = this.state
        
        return count === 0 ? <span>zero</span> : count
    }
}

export default Counter;