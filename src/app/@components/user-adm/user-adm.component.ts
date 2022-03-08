import { Component, OnInit } from '@angular/core';
import { UserService } from  'src/app/@services/user/user.service';

@Component({
  selector: 'app-user-adm',
  templateUrl: './user-adm.component.html',
  styleUrls: ['./user-adm.component.css']
})
export class UserAdmComponent implements OnInit {
  users:any=[];
  userAdd:any=[];
  view=0;
  index=0;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    var user = JSON.parse(sessionStorage.getItem('user'));
    this.userService.init(user.apiToken);
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe(res => {
      this.users = res;
    },
    error=> {
      alert(error.message);
    });
  }

  add(){
    this.userService.addUser(this.userAdd).subscribe(res => {
      this.getAllUsers();
      this.view=0;
      alert("Usuario agregado correctamente");
    },
    error=> {
      alert(error.message);
    });
  }

  update(){
    this.userService.updateUser(this.userAdd, this.index).subscribe(res => {
      this.getAllUsers();
      this.view=0;
      alert("Usuario actualizado correctamente");
    },
    error=> {
      alert(error.message);
    });
  }

  updateAux(id:number, index:number){
    this.index=id;
    this.view=2;
    this.userAdd.name = this.users[index].name;
    this.userAdd.email = this.users[index].email;
    this.userAdd.role_id = this.users[index].role_id;
  }

  delete(id:number, index:number){
    this.userService.deleteUser(id).subscribe(res => {
      this.users.splice(index,1);
      alert("Usuario eliminado");
    },
    error=> {
      alert(error.message);
    });
  }

  changeView(value:number){
    this.view = value;
    this.userAdd=[];
  }

}
