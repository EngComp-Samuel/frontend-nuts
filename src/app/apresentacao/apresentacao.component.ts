import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-apresentacao',
  standalone: true,
  imports: [NgFor, RouterOutlet, RouterLink, RouterLinkActive, LoginComponent],
  templateUrl: './apresentacao.component.html',
  styleUrl: './apresentacao.component.css'
})
export class ApresentacaoComponent {

  numerosAtividades = [
    {id: "Atividades", valor: 359}, 
    {id: "Gravações", valor: 452}, 
    {id: "Telessaúde", valor: 1230},
    {id: "Telessaúde2", valor: 1230},
    {id: "Telessaúde3", valor: 1230},
    {id: "Telessaúde4", valor: 1230},
    {id: "Telessaúde9", valor: 1230},
  ];

  servicos = [
    {id: "Conferências", valor: "Realizamos suporte a conexão Realizamos suporte a conexãoRealizamos suporte a conexãoRealizamos suporte a conexãoRealizamos suporte a conexão"},
    {id: "Telessaúde", valor: "Realizamos suporte a conexãoRealizamos suporte a conexãoRealizamos suporte a conexãoRealizamos suporte a conexãoRealizamos suporte a conexãoRealizamos suporte a conexão"},
    {id: "Gravação/Edição", valor: "Realizamos suporte a conexãoRealizamos suporte a conexãoRealizamos suporte a conexãoRealizamos suporte a conexãoRealizamos suporte a conexãoRealizamos suporte a conexão"},
    {id: "Conferências2", valor: "Realizamos suporte a conexão Realizamos suporte a conexãoRealizamos suporte a conexãoRealizamos suporte a conexãoRealizamos suporte a conexão"},
    {id: "Telessaúde2", valor: "Realizamos suporte a conexãoRealizamos suporte a conexãoRealizamos suporte a conexãoRealizamos suporte a conexãoRealizamos suporte a conexãoRealizamos suporte a conexão"},
    {id: "Gravação/Edição2", valor: "Realizamos suporte a conexãoRealizamos suporte a conexãoRealizamos suporte a conexãoRealizamos suporte a conexãoRealizamos suporte a conexãoRealizamos suporte a conexão"},
  ];
  
  equipe = [
    {id:"1", valor:"um"},
    {id:"2", valor:"dois"},
    {id:"3", valor:"três"},
    {id:"4", valor:"quatro"},
    {id:"5", valor:"cinco"},
    {id:"6", valor:"seis"},
    {id:"7", valor:"sete"}

  ];

  
  title = 'frontend-nuts';

  tituloSetor = 'Núcleo Universitário de Telessaúde';
  textoTelaInicial = 'aqui shsdfg gfs ufsjk dgjkhd kfdgkhgfd k dgkjdfkg kdgjkdgkfdhkjghdfk kjhgdjfk gkdfhk gkdgkd kjg hdkjgdkgkd  djkfgkdjf gkd gkkgkdgkjdkjh gifdhjghfdkjghfdkjhgdfkjhgkfdj gfkjdhgkjfhglk dighdkjhgkj  j j dighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j j aqui shsdfg gfs ufsjk dgjkhd kfdgkhgfd k dgkjdfkg kdgjkdgkfdhkjghdfk kjhgdjfk gkdfhk gkdgkd kjg hdkjgdkgkd  djkfgkdjf gkd gkkgkdgkjdkjh gifdhjghfdkjghfdkjhgdfkjhgkfdj gfkjdhgkjfhglk dighdkjhgkj  j j dighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jaqui shsdfg gfs ufsjk dgjkhd kfdgkhgfd k dgkjdfkg kdgjkdgkfdhkjghdfk kjhgdjfk gkdfhk gkdgkd kjg hdkjgdkgkd  djkfgkdjf gkd gkkgkdgkjdkjh gifdhjghfdkjghfdkjhgdfkjhgkfdj gfkjdhgkjfhglk dighdkjhgkj  j j dighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j j aqui shsdfg gfs ufsjk dgjkhd kfdgkhgfd k dgkjdfkg kdgjkdgkfdhkjghdfk kjhgdjfk gkdfhk gkdgkd kjg hdkjgdkgkd  djkfgkdjf gkd gkkgkdgkjdkjh gifdhjghfdkjghfdkjhgdfkjhgkfdj gfkjdhgkjfhglk dighdkjhgkj  j j dighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j jdighdkjhgkj  j j ';


  
}
