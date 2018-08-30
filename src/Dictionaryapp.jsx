import React, { Component } from 'react';


export default class Dictionary extends Component
{
    constructor()
    {
        super();
        this.state ={
            searchword : '',
            searhresult: ''
            
        }
    }

    handleInput = (e) =>{
        const name = e.target.name;
        // const DictionaryJSON = require("./Dictionary.json");
        // const DictionarySTRING = JSON.stringify(DictionaryJSON); 
        // const DictionaryData = JSON.parse(DictionarySTRING);

        this.setState({
            [name] : e.target.value
            //searchresult: DictionaryData[this.state.searchword]
            //searchword : e.target.value
        })

        //var searchItem = this.state.searchresult;

        // this.setState({
        //     searchresult: JSON.stringify(DictionaryJSON)
        // })
        
        // console.log(this.state.searchresult)
        // console.log(DictionaryJSON);
        //console.log (searchItem);
        // console.log(DictionarySTRING);
        // console.log(DictionaryData);
    }

    onSearch = () => 
    {
       
        const DictionaryJSON = require("./Dictionary.json");
       // const DictionarySTRING = JSON.stringify(DictionaryJSON);
       
        const searchItem = this.state.searchword.toUpperCase();

        this.setState({
            searchresult: JSON.stringify(DictionaryJSON[searchItem])
        })

        console.log(this.state.searchresult)
        //console.log(DictionaryJSON);
        console.log (searchItem);
    }

   

    render()
    {
        return(
            <div >
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
                <div className="searchresults" onClick ={this.onSearch}><p>{this.state.searchresult}</p></div>
            </div>
        )
    }
}