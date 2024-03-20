import React from 'react';
import {View, Text, Button, Platform} from 'react-native';
import BackgroundTimer from "react-native-background-timer";
import AvailGlobal from './Context'
function TimerComponent(){
const[state,setState]=React.useState({count:3000})
  onStart = () => {
      BackgroundTimer.start();
    }

    interval = BackgroundTimer.setInterval(() => {
      this.setState({
        second: this.state.count-1,
      })
    }, 1000);
  }

  onPause = () => {
    BackgroundTimer.clearInterval(this.interval);
  }

  onReset = () => {
    this.setState({
      second: 0,
    })
    BackgroundTimer.clearInterval(this.interval);
  }

  renderStartButton = () => {
    return (
      <Button 
        title="Start"
        onPress={this.onStart}
      />
    )
  }

  renderPauseButton = () => {
    return (
      <Button 
        title="Pause"
        onPress={this.onPause}
    />
    )
  }

  renderResetButton = () => {
    return (
      <Button 
        title="Reset"
        onPress={this.onReset}
    />
    )
  }

  renderContent = ()=> {
    return (
     <AvailGlobal.provider value={{state}}>
        <Text style={styles.secondText}>{this.state.second}</Text>
        <View style={styles.buttonWrapper}>
          {this.renderStartButton()}
          {this.renderPauseButton()}
          {this.renderResetButton()}
        </View>
        <Input placeholder='Second for meditation'>SecondFormeditation</Input>
        <Input placeholder='Second for Reset'>SecondAfterReset</Input>
        </AvailGlobal.provider> 
    );
}
export default TimerComponent;