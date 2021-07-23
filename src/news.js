import React, {Component} from 'react'
import $ from 'jquery';

class News extends Component{
    constructor(props){
        super(props)
        this.state = {
            api1: {response: {content: {fields: {}}}},
            api2: {response: {content: {fields: {}}}},
            api3: {response: {content: {fields: {}}}}
        }
    }

    componentDidMount(){
        $.get("https://content.guardianapis.com/world/2021/mar/22/link-between-diabetes-and-coronavirus-infections?show-fields=body&api-key=bf8daced-5acd-41f7-9836-fb4131e480cf&show-fields=all", (data) => {
        this.setState({api1: data})
            })
        
        $.get("https://content.guardianapis.com/football/2021/jun/05/aston-villa-agree-30m-deal-for-norwich-midfielder-emiliano-buendia?api-key=bf8daced-5acd-41f7-9836-fb4131e480cf&show-fields=all", (data) => {
        this.setState({api2: data})
            })
     
        $.get("https://content.guardianapis.com/tv-and-radio/2021/jul/22/clarksons-farm-best-thing-jeremy-clarkson-has-done-amazon?api-key=bf8daced-5acd-41f7-9836-fb4131e480cf&show-fields=all", (data) => {
        this.setState({api3: data})
            })


        //try and get this to toggle
        document.getElementById("headline2").addEventListener("click", function(){
            document.getElementById('article1').className='App'
            })

        document.getElementById("headline3").addEventListener("click", function(){
            document.getElementById('article2').className='App'
            })

        document.getElementById("headline4").addEventListener("click", function(){
            document.getElementById('article3').className='App'
            })
            
    }

    render(){
        return(
            <div>
                <h3 id='headline1' hidden="yes">This is a headline</h3>
                <h2 id='headline2' title="apiHead" className='fontFamily'>{this.state.api1.response.content.webTitle}</h2>
                <img src={this.state.api1.response.content.fields.thumbnail} id='img1' alt='image1'></img>
                <p className='hidden' id='article1'>{this.state.api1.response.content.fields.body}</p>
                <br></br><br></br><br></br>
                <h2 id='headline3' title='apiHead2' className='fontFamily'>{this.state.api2.response.content.webTitle}</h2>
                <img src={this.state.api2.response.content.fields.thumbnail} id='img2' alt='image2'></img>
                <p className='hidden' id='article2'>{this.state.api2.response.content.fields.body}</p>
                <br></br><br></br><br></br>
                <h2 id='headline4' title='apiHead3' className='fontFamily'>{this.state.api3.response.content.webTitle}</h2>
                <img src={this.state.api3.response.content.fields.thumbnail} id='img3' alt='image3'></img>
                <p className='hidden' id='article3'>{this.state.api3.response.content.fields.body}</p>

            </div>
        )
    }
}

export default News;