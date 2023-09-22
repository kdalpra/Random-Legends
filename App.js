import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated } from 'react-native';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class App extends React.Component {


  state = {
    firstChar:23,
    secondChar:23,
    thirdChar:23,
    imAr:[require("./assets/legends/1.png"), require("./assets/legends/2.png"),
    require("./assets/legends/3.png"),require("./assets/legends/4.png"),
    require("./assets/legends/5.png"),require("./assets/legends/6.png"),
    require("./assets/legends/7.png"),require("./assets/legends/8.png"),
    require("./assets/legends/9.png"),require("./assets/legends/10.png"),
    require("./assets/legends/11.png"),require("./assets/legends/12.png"),
    require("./assets/legends/13.png"),require("./assets/legends/14.png"),
    require("./assets/legends/15.png"),require("./assets/legends/16.png"),require("./assets/legends/17.png"),
    require("./assets/legends/18.png"),require("./assets/legends/19.png"),require("./assets/legends/20.png"),
    require("./assets/legends/21.png"),require("./assets/legends/22.png"),require("./assets/legends/23.png"),require("./assets/legends/PlaceHolder.png"),],
    firstCharOpacity: new Animated.Value(1),
    secondCharOpacity: new Animated.Value(1),
    thirdCharOpacity: new Animated.Value(1),
    duoAr: [
      [16,17,23], //seer valk
      [0,5,23],   //bloodhound bang
      [14,15,23], //horizon fuse
      [9,13,23],  //wattson ramp
      [3,8,23],   //path octane
      [11,18,23], //revenant ash
      [6,15,23], //caustic fuse
      [13,21,23], //ramp vantage
      [6,9,23], //caustic watson
      [11,8,23], //revenant octane
      [14,6,23], // horizon caustic
      [9,20,23], //wattson newcastle
      [9,12,23], //wattson loba
      [17,22,23], //seer catalyst
      [4,9,23], //wraith wattson
      [4,8,23], //wraith octane
    ],
    trioAr: [
      [1,2,3],
      [5,6,7]
    ],
  }




  changeCards = (firstNum, secondNum, thirdNum)=>{
    if(firstNum>-1){
      Animated.timing(this.state.firstCharOpacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
    }).start(() => {
      this.setState({firstChar: firstNum});
      Animated.timing(this.state.firstCharOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
    }).start();
  });
    }
    if(secondNum>-1){
      Animated.timing(this.state.secondCharOpacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
      this.setState({secondChar: secondNum});
      Animated.timing(this.state.secondCharOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
      });
    }

if(thirdNum>-1){
  Animated.timing(this.state.thirdCharOpacity, {
    toValue: 0,
    duration: 500,
    useNativeDriver: true,
  }).start(() => {
  this.setState({thirdChar: thirdNum});
  Animated.timing(this.state.thirdCharOpacity, {
    toValue: 1,
    duration: 500,
    useNativeDriver: true,
  }).start();
  });
}
  }


  randomDuo = () =>{
    let choice = Math.floor(Math.random() * (this.state.duoAr.length));
    this.changeCards(this.state.duoAr[choice][0], this.state.duoAr[choice][1], this.state.duoAr[choice][2])
  }


  randomizeAll = ()=>{
    let x = 0;
    let y = 0;
    let z = 0;
    x = Math.floor(Math.random() * (this.state.imAr.length-1));
    y = Math.floor(Math.random() * (this.state.imAr.length-1));
    z = Math.floor(Math.random() * (this.state.imAr.length-1));

    while( x == y){
      y = Math.floor(Math.random() * (this.state.imAr.length-1));
    }
    while(z == x || z==y){
      z = Math.floor(Math.random() * (this.state.imAr.length-1));
    }
    this.changeCards(x, y, z)
  }

  changeFirst = ()=>{
    let prev = this.state.firstChar;
    let x = this.state.firstChar;
    let y = this.state.secondChar;
    let z = this.state.thirdChar;
    x = Math.floor(Math.random() * (this.state.imAr.length-1));
    while( x == y || x == prev || x==z){
      x = Math.floor(Math.random() * (this.state.imAr.length-1));
    }
    this.changeCards(x,-1,-1);
  }

  changeSecond = ()=>{
    let prev = this.state.secondChar;
    let x = this.state.firstChar;
    let y = this.state.secondChar;
    let z = this.state.thirdChar;
    y = Math.floor(Math.random() * (this.state.imAr.length-1));
    while( x == y || y == prev || y==z){
      y = Math.floor(Math.random() * (this.state.imAr.length-1));
    }
    this.changeCards(-1,y,-1);
  }

  changeThird = ()=>{
    let prev = this.state.thirdChar;
    let x = this.state.firstChar;
    let y = this.state.secondChar;
    let z = this.state.thirdChar;
    z = Math.floor(Math.random() * (this.state.imAr.length-1));
    while( x == z || z == prev || z==y){
      z = Math.floor(Math.random() * (this.state.imAr.length-1));
    }
    this.changeCards(-1,-1,z);
  }

  render(){
    return (
      <View style={styles.container}>

        <View style={{ flexDirection:'row', alignItems: 'center', justifyContent: 'center', textAlign:'center', width:'95%'}}> 

          <View style={styles.pOneTwo}>
            <Text style = {styles.txtCols}>PLAYER 1</Text>
            <TouchableOpacity style={{}} onPress = {() =>{this.changeFirst()}}>
            <Animated.Image style={[styles.legCards, {opacity: this.state.firstCharOpacity}]} source={this.state.imAr[this.state.firstChar]}/>
            </TouchableOpacity>
          </View>
        
          <View style={styles.pOneTwo}> 
            <Text style = {styles.txtCols}>PLAYER 2</Text>
            <TouchableOpacity style={{}} onPress = {() =>{this.changeSecond()}}>
            <Animated.Image style={[styles.legCards, {opacity: this.state.secondCharOpacity}]} source={this.state.imAr[this.state.secondChar]}/>
            </TouchableOpacity> 
          </View>

        </View>

          <View style={styles.pOneTwo}> 
            <Text style = {styles.txtCols}>PLAYER 3</Text>
            <TouchableOpacity onPress = {() =>{this.changeThird()}}>
            <Animated.Image style={[styles.legCards, {opacity: this.state.thirdCharOpacity}]} source={this.state.imAr[this.state.thirdChar]}/>
            </TouchableOpacity> 
          </View>

          <TouchableOpacity style = {styles.btnDesign2}  onPress = {() =>{this.randomizeAll()}}><Text style = {styles.txtCols2}>Randomize All</Text></TouchableOpacity>
          
          <View style={{flexDirection:'row', height:'10%', width:'100%', textAlign:'center', alignItems:'center', justifyContent:'center'}}>
            <TouchableOpacity style = {styles.btnDesign3}  onPress = {() =>{this.randomDuo()}}><Text style = {styles.txtCols2}>Preset Duo</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.btnDesign3}  onPress = {() =>{this.randomizeAll()}}><Text style = {styles.txtCols2}>Preset Trio</Text></TouchableOpacity>
          </View>

        <StatusBar style="auto" />
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#697482',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  pOneTwo:{
    alignItems: 'center', justifyContent:'center', textAlign:'center', width:'45%',
  },
  legCards:{
    width:'100%',
    height:undefined,
    aspectRatio:1,
    resizeMode:'contain',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    //elevation: 1,
  },
  txtCols:{
    color:'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: '5%',
  },
  txtCols2:{
    color:'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: '5%',
    marginTop: '5%',
  },

  btnDesign2:{
    width: '50%',
    height: '10%',
    backgroundColor: '#4a4a4a',
    marginTop: '5%',
    marginBottom: '5%',
    borderRadius: 80,
    alignItems: "center",
    justifyContent: "center",
    borderWidth:1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 1,
  },
  btnDesign3:{
    width: '40%',
    height: '90%',
    backgroundColor: '#4a4a4a',
    marginTop: '5%',
    marginBottom: '5%',
    marginLeft:'2%',
    marginRight:'2%',
    borderRadius: 80,
    alignItems: "center",
    justifyContent: "center",
    borderWidth:1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 1,
  },
});
