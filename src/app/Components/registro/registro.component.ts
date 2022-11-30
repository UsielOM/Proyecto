import { Component, OnInit } from '@angular/core';
import { Registro } from 'src/app/interface/registro';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
reg: Registro = new Registro();
  constructor(private postService: PostService) { }
  registroUsuarios(): void{
    this.postService.crearRegistros(this.reg).subscribe(result => {
      this.reg = result;
      console.log(this.reg);
      
    })
  }

  ngOnInit(): void {
  }

}
