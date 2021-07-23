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
        $.get("https://content.guardianapis.com/world/2021/mar/22/link-between-diabetes-and-coronavirus-infections?show-fields=body&api-key=bf8daced-5acd-41f7-9836-fb4131e480cf&show-fields=thumbnail", (data) => {
        this.setState({api1: data})
    })
        $.get("https://content.guardianapis.com/football/2021/jun/05/aston-villa-agree-30m-deal-for-norwich-midfielder-emiliano-buendia?api-key=bf8daced-5acd-41f7-9836-fb4131e480cf&show-fields=thumbnail", (data) => {
        this.setState({api2: data})
    })
        $.get("https://content.guardianapis.com/tv-and-radio/2021/jul/22/clarksons-farm-best-thing-jeremy-clarkson-has-done-amazon?api-key=bf8daced-5acd-41f7-9836-fb4131e480cf&show-fields=thumbnail", (data) => {
        this.setState({api3: data})
    })
    }

    render(){
        return(
            <div>
                <h3 id='headline1' hidden="yes">This is a headline</h3>
                <h1 id='headline2' title="apiHead" className='fontFamily'>{this.state.api1.response.content.webTitle}</h1>
                <img src={this.state.api1.response.content.fields.thumbnail} id='img1' alt='image1'></img>
                <h1 id='headline3' title='apiHead2' className='fontFamily'>{this.state.api2.response.content.webTitle}</h1>
                <img src={this.state.api2.response.content.fields.thumbnail} id='img2' alt='image2'></img>
                <h1 id='headline4' title='apiHead3' className='fontFamily'>{this.state.api3.response.content.webTitle}</h1>
                <img src={this.state.api3.response.content.fields.thumbnail} id='img3' alt='image3'></img>

            </div>
        )
    }
}

export default News;