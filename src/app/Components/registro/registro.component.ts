import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Registro } from 'src/app/interface/registro';
import { PostService } from 'src/app/Service/post.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

reg: Registro = new Registro();

  constructor(private postService: PostService, private fb:FormBuilder) {
    this.formulario();
   }

  registroUsuarios(): void{
    this.postService.crearRegistros(this.reg).subscribe(result => {
      this.reg = result;
      console.log(this.reg);
      
    })
  }

  form:any;

formulario(){
  this.form= this.fb.group({
    Name:['',Validators.required],
    ApellidoP:['',Validators.required],
    ApellidoM:['',Validators.required],
    Correo:['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    Telefono:['',Validators.required],
    Matricula:['',Validators.required],
    Area:['',Validators.required],
    fecha:['',Validators.required]
  })
}
  ngOnInit(): void {
  }

}
