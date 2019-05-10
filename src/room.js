import React from 'react';
import './App.css';
import AppBar from './component/room/AppBar';
import Creation from './component/room/creation'
import Location from './component/room/location'
import BasicDetails from './component/room/basicDetails'
import Photos from './component/room/photos'
import Description from './component/room/description'
import Facilities from './component/room/facilities'
import BasicRates from './component/room/basicRates'
import SeasonRates from './component/room/seasonRates'
import Discount from './component/room/discounts'
import Extra from './component/room/extras'
import BookingRules from './component/room/bookingRules'
import HouseRules from './component/room/houseRules'
import Instruction from './component/room/instruction'
import Channels from './component/room/channel'
class Room extends React.Component{
    constructor(props){
        super(props);
    }

    state = {
        new:true,
        indexing:0
    }

    handleOption = (index) =>{
        this.setState({new:false,indexing:index})
        
    }
    showOption = () =>{
        if(this.state.new==false && this.state.indexing==0){
            
            return true;
        }
    }
    render(){
        return (
            <div className="App">
                <div>
                    <AppBar  onSelectOption={this.handleOption}/>
                </div>
                <div style={{marginLeft:'20%'}}>
                {(this.showOption(this.state))?
                        <Location/>:(this.state.indexing ==1)?
                        <BasicDetails/>:(this.state.indexing ==2 )?
                        <Creation/>:(this.state.indexing ==3 )?
                        <Photos/>:(this.state.indexing ==4 )?
                        <Description/>:(this.state.indexing ==5 )?
                        <Facilities/> : (this.state.indexing ==6 )?
                        <BasicRates/>:(this.state.indexing ==7)? 
                        <SeasonRates/>:(this.state.indexing ==8)? 
                        <Discount/>:(this.state.indexing==9)?
                        <Extra/>:(this.state.indexing==10)?
                        <BookingRules/>:(this.state.indexing==11)?
                        <HouseRules/>:(this.state.indexing==12)?
                        <Instruction/>:(this.state.indexing==13)?
                        <Channels/>:null
                }
                </div>
            </div>
        )
    }


}

export default Room;