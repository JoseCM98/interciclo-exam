import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/Persona';
import { PersonaService } from 'src/app/services/persona/persona.service';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  persona:Persona = new Persona();
  estado:boolean=true;
  listadePersonas:Persona[]=[];
  listaPersona:Persona[]=[];
  nuevo:string="";
  idCarta:number=0
  nombreCarta:string=""
  apellidoCarta:string=""
  fechaNacimientoCarta:string=""
  fotoCarta:string=""
  usuarioCarta:string=""
  passwordCarta:string=""
  gif:string=""
  show:boolean=false;
  muestra:boolean=false;
  date: Date = new Date();
  fechaActual:string=this.date.getDate() + "/" + (this.date.getMonth() +1) + "/" + this.date.getFullYear()

  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
    this.personaService.listarPersonas().subscribe((res:any)=>{
      this.listadePersonas=res;

    });
  }
  buscar(num:number){
    this.nuevo=num.toString()
    this.personaService.getPersona(this.nuevo).subscribe((res:any)=>{
      this.idCarta=res.id,
      this.nombreCarta=res.nombre,
      this.apellidoCarta=res.apellido,
      this.fechaNacimientoCarta=res.fechaNacimiento,
      this.fotoCarta=res.foto,
      this.usuarioCarta = res.username,
      this.passwordCarta = res.password
      console.log(res)
      if (this.fechaActual.slice(0,4)==this.fechaNacimientoCarta.slice(0,4))
      {
        this.muestra=true
        this.gif="https://reygif.com/media/2/feliz-cumpleanos-en-ingles-22333.gif"
          console.log(this.fechaActual.slice(0,4));
      }else{
        this.muestra=false
        console.log(this.fechaActual,this.fechaNacimientoCarta);
      }

    }
    );



  }
}
