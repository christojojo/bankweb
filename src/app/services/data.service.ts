import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentuser:any
  currentAcno:any

  userDetailes:any={
    1000:{acno:1000,username:"christo",password:123,balance:10000,transaction:[]},
    1001:{acno:1001,username:"jeswin",password:123,balance:10000,transaction:[]},
    1002:{acno:1002,username:"akhil",password:123,balance:10000,transaction:[]},
    1003:{acno:1003,username:"abey",password:123,balance:10000,transaction:[]},

  }

  constructor() { }

  register(acno:any,username:any,password:any){
let userDetailes=this.userDetailes
if(acno in userDetailes){
  return false
}else{
  userDetailes[acno]={acno,username,password,balance:0}
  console.log(userDetailes);
  
  return true
}
  }



  login(acno:any,psw:any){

    let userDetailes=this.userDetailes
    if(acno in  userDetailes){
      if(psw==userDetailes[acno]['password']){
        this.currentuser=userDetailes[acno]['username']
        this.currentAcno=acno
    return true
      }else{
        alert("incorrect password")
        return false
      }
      }else{
        alert("user not exist or inncorrect acno")
        return false
      }
    }


    deposit(acnum:any,pswrd:any,amnt:any){
      let userDetailes=this.userDetailes
      var amount=parseInt(amnt)    //amnt is in input.it will be in string form.so we take parseint
      if(acnum in userDetailes){
        if(pswrd==userDetailes[acnum]['password']){
          userDetailes[acnum]['balance']+=amount
          userDetailes[acnum]['transaction'].push({type:'CREDIT',amount})
          return userDetailes[acnum]['balance']
        }else{
          alert('incorrect password')
        }
      }else{
        alert('user not exist')
        return false
      }
      }
    
  
  withdraw(acnum:any,pswrd:any,amt:any){
    let userDetailes=this.userDetailes
    var amount=parseInt(amt)    //amnt is in input.it will be in string form.so we take parseint
    if(acnum in userDetailes){
      if(pswrd==userDetailes[acnum]['password']){
        if(userDetailes[acnum]['balance']>=amt){
          userDetailes[acnum]['balance']-=amount
          userDetailes[acnum]['transaction'].push({type:'DEBIT',amount})
          return userDetailes[acnum]['balance']
        }else{
          alert("insufficient balance")
          return false
        }
     
      }else{
        alert('incorrect password')
      }
    }else{
      alert('user not exist')
      return false
    }
  
  }
  
getTransaction(acno:any){
  return this.userDetailes[acno]['transaction']

}











}



