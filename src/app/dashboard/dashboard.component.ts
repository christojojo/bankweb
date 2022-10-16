import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

user=""

  acnum=""
  pswrd=""
  amnt=""

  acnum1=""
  pswrd1=""
  amt1=""


  constructor(private ds:DataService) { 
    this.user=this.ds.currentuser
  }

  ngOnInit(): void {
  }
  deposit(){
    var acnum=this.acnum
    var pswrd=this.pswrd
    var amnt=this.amnt
    
    const result=this.ds.deposit(acnum,pswrd,amnt)
    if(result){
      alert(`${amnt}is credited.new balance is ${result}`)
    }
      }
    
    withdraw(){
      var acnum=this.acnum1
    var pswrd=this.pswrd1
    var amt=this.amt1
    
    const result=this.ds.withdraw(acnum,pswrd,amt)
    if(result){
    alert(`${amt} is withdrawed.new balance is ${result}`)
    }
    }
    
    








}  


