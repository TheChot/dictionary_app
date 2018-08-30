import React, { Component } from 'react';

export default class Dictionary extends Component
{
    constructor()
    {
        super();
        this.state ={
            searchword : ''
        }
    }

    handleInput = (e) =>{
        //const name = e.value.name;

        this.setState({
            //[name] : e.target.value
            searchword : e.target.value
        })
    }
    render()
    {
        return(
            <div>
                <form action="">
                    <input 
                        type="text" 
                        placeholder="SEARCH FOR A WORD" 
                        className="searchbar" 
                        value ={null}
                        name = "searchword"
                        onChange = {this.handleInput}/>
                </form>
                <br/><br/>
                <div className="searchresults"><p>{this.state.searchword}</p></div>
            </div>
        )
    }
}