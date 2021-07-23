import React, {Component} from 'react'
import $ from 'jquery';

class News extends Component{
    constructor(props){
        super(props)
        this.state = {api: {response: {content: {fields: {}}}}}
    }

    componentDidMount(){
        $.get("https://content.guardianapis.com/world/2021/mar/22/link-between-diabetes-and-coronavirus-infections?show-fields=body&api-key=bf8daced-5acd-41f7-9836-fb4131e480cf&show-fields=thumbnail", (data) => {
        this.setState({api: data})
    })
    }

    render(){
        return(
            <div>
                <h3 id='headline1' hidden="yes">This is a headline</h3>
                <h1 id='headline2' title="apiHead" className='fontFamily'>{this.state.api.response.content.webTitle}</h1>
            </div>
        )
    }
}

export default News;