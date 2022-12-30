import React, { Component } from 'react'
// timer good morning, Good afternoon, Good night
export default class Timer extends Component {
  render() {
    let currentDate= new Date();
    currentDate=currentDate.getHours();
    let Greeting="";
    const cssStyle={};
    if(currentDate>1 && currentDate<12){
     Greeting="Good Morning";
     cssStyle.color='#00b894';
  }else if(currentDate>=12 && currentDate<20){
     Greeting="Good Afternoon";
     cssStyle.color='orange';
 }else if(currentDate>=20 && currentDate<=24){
     Greeting="Good Night";
     cssStyle.color='black';
 }
    return (
      <div>
            <h1>Hello sir, <span style={cssStyle}>{Greeting}</span></h1>
        </div>
    )
  }
}
