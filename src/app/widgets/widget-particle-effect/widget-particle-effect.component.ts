import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-particle-effect',
  templateUrl: './widget-particle-effect.component.html',
  styleUrls: ['./widget-particle-effect.component.scss']
})
export class WidgetParticleEffectComponent implements OnInit {
  // block = document.querySelector('.block')
  // span = document.createElement('span')

  constructor() { }

  // createSquare(){
  //   let size = Math.random() * 50
  //
  //   this.span.style.width = 20 + size + 'px'
  //   this.span.style.height = 20 + size + 'px'
  //
  //   this.span.style.top = Math.random() * innerHeight + 'px'
  //   this.span.style.left = Math.random() * innerWidth + 'px'
  //
  //   this.block.appendChild(this.span)
  //
  //   setTimeout(()=>{
  //     this.span.remove()
  //   }, 5000)
  // }


  ngOnInit(): void {
    // setInterval(this.createSquare, 150)
  }

}
