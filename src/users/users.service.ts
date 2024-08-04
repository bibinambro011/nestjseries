import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
     users=[{id:1,name:"bibin",age:28},
        {id:2,name:"baiju",age:31},
        {id:3,name:"clerus",age:33}
    ]

    findBuId(id:number){
       let user= this.users.filter((data)=>{
            if(data.id==id){
                return data
            }
        })
        if(!user) throw new NotFoundException("user not found");
        console.log("error")
        return user
        
        
    }
    findAll(){
        return this.users
    }
    create(user:{name:string,age:number}){
     const exisitinguser=  this.users.sort(function(a,b){return b.id-a.id});
        let addeduder={id:exisitinguser[0].id+1};
        this.users.push({...addeduder,...user});
        return this.users[this.users.length-1]
    };



}
