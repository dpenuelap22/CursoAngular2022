import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public image:string="https://lh6.googleusercontent.com/0wgpMYzA0Aa2dBQSlk6-53FPqgjYkwSUvIpL1PsYZOKF3f4XgkqGQPLFrzIvg1fzqVf81luTLlIX5zS9ytmzD6WDWfieXuAIZLmnkkAQ_kFKc3p-cvTEcvwwYX7vp9HJwk2hP3v1";
  public titulo:string="El cuerpo Humano es increible";
  @Input() dataEntrante:any;

  constructor() { }

  ngOnInit(): void {
  }

}
