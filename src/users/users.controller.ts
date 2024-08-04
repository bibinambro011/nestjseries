import { Body, Controller, Get, Param, Patch, Post, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userservice:UsersService){}
    @Get('interns')
    findAll(){
        return this.userservice.findAll()
    }
    @Get(':id')
    findById(@Param('id') id:string){
        let result={"name":"bibin","age":20}
        return  this.userservice.findBuId(+id)
    }
    @Post()
        create(@Body(ValidationPipe) user:{name:string,age:number}){
                return this.userservice.create(user)
        }
    @Patch(":id")
     update(@Param('id')id:string, @Body() userdata:{}){
        return {id,...userdata}
     }
}
