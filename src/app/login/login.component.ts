import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


aim="Your Perfect Banking Partner"
acnt="enter your ac number"

acno=''
psw=''

  userDetailes:any={
    1000:{acno:1000,username:"christo",password:123,balance:10000},
    1001:{acno:1001,username:"jeswin",password:123,balance:10000},
    1002:{acno:1002,username:"akhil",password:123,balance:10000},
    1003:{acno:1003,username:"abey",password:123,balance:10000},


  }

  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }



login(){
  var acnum=this.acno
  var psw=this.psw

  const result=this.ds.login(acnum,psw)
  if(result){
    alert('login success')
    this.router.navigateByUrl('dashboard')
  }

  }

// login(a:any,b:any){
// console.log(a.value);
// console.log(b.value);



//   var acnum=a.value
//   var psw=b.value

//   let userDetailes=this.userDetailes
//   if(acnum in  userDetailes){
//     if(psw==userDetailes[acnum]['password']){
//       alert("login sucess")
//     }else{
//       alert("incorrect password")
//     }
//     }else{
//       alert("user not exist or inncorrect acno")
//     }
//   }



// acnochange(event:any){
//   this.acno=event.target.value
//   console.log(this.acno);
  
// }
// pswchange(event:any){
// this.psw=event.target.value
// console.log(this.psw);

// }

}
