import React from 'react';
import './App.css';
import AppBar from './component/AppBar';
import Creation from './component/channel/Creation'
import ChannelManagement from './component/channel/ChannelManagement'

class Main extends React.Component{
    constructor(props){
        super(props);
    }

    state = {
        new:true,
        indexing:0,
        channelList:[]
    }

    componentWillMount(){
        console.log(this.state.channelList)
    }

    handleOption = (index,channels) =>{

        this.setState({new:false,indexing:index,channelList:channels})
        
    }

    showOption = () =>{
        if(this.state.new==false && this.state.indexing==0){
            
            return true;
        }
    }

    handleChannelList = (newChannelList) =>{
        console.log(newChannelList)
        this.setState({channelList:newChannelList})   
    }
 

    render(){
        return (
            <div className="App">
            <div>
                <AppBar  onSelectOption={this.handleOption} channels={this.state.channelList}/>
            </div>
            <div style={{marginLeft:'20%',marginTop:'2%'}}>
            {this.showOption(this.state)?
                <Creation channelList={this.handleChannelList} channels={this.state.channelList}/>: (this.state.indexing==1)?
                 <ChannelManagement  channelList={this.state.channelList}/>:false
            }
            </div>
            </div>
        )
    }


}

export default Main;