import React, { Component } from 'react'

export default class Counter extends Component {
    state={
        value:this.props.counter.value,

        tags: ['tag1','tag2','tag3']
        // imageUrl: 'https://picsum.photos/200'
    };

    // renderTags() {
    //     if (this.state.tags.length===0) return <p>There are no tags!</p>;
    //     return (<ul> {this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>);
    // }

    // constructor(){
    //     super();
    //     console.log('constructor',this);
    // this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = product =>{
        // console.log(product);
        // this.state.count+=1; won't work in react
        this.setState({value: this.state.value + 1})
        // console.log('Increment Clicked',this);
    };

    // doHandleIncrement = () => {
    //     this.handleIncrement({id:1});
    // };

    render() { 
        console.log(this.props);
        return (<div>
            {/* <img src={this.state.imageUrl} alt="" /> */}
            {/* <h4>{this.props.id}</h4> */}
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={ () => this.handleIncrement()} className="btn btn-secondary btn-sm">
                Increment
                </button>
                <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            {/* {this.state.tags.length === 0 && "Please create a new tag!"} */}
            {/* {this.renderTags()}; */}
                       
            </div>);
    }
    
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value: count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
