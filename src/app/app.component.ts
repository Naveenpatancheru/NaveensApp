import { Component } from '@angular/core';
import ScrollReveal from 'scrollreveal'
import { Scroll } from '@angular/router';
import * as $ from 'jquery'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NaveensApp';
  counter: number=22;
  
  
  ngOnInit() {

    ScrollReveal().reveal('.navbar',{
      duration: 2000,
      origin:'buttom'
  });
  ScrollReveal().reveal('.showcase-left',{
    duration: 2000,
    origin:'top',
    distance:'300px'
});
ScrollReveal().reveal('.showcase-right',{
  duration: 2000,
  origin:'right',
  distance:'300px'
});
ScrollReveal().reveal('.showcase-btn',{
  duration: 3000,
  delay:3000,
  origin:'buttom'
});
ScrollReveal().reveal('#testimonial div', {
  duration: 1000,
  origin:'bottom'
});
ScrollReveal().reveal('.info-left', {
  duration: 2000,
  origin:'left',
  distance:'300px',
  viewFactor: 0.2
});
ScrollReveal().reveal('.info-right', {
  duration: 2000,
  origin:'right',
  distance:'300px',
  viewFactor: 0.2
});
ScrollReveal().reveal('.paragraph2', {
  duration: 2000,
  delay:2000,
  origin:'buttom'
});
ScrollReveal().reveal('.item', {
  duration: 2000,
  origin:'right',
  distance:'300px',
  viewFactor: 0.2
});
ScrollReveal().reveal('.contact', {
  duration: 2000,
  origin:'right',
  distance:'300px',
  viewFactor: 0.2
});
ScrollReveal().reveal('.footer-distributed', {
  // duration: 2000,
  // delay:2000,
  // duration: 2000,
  // origin:'buttom',
  // viewFactor: 0.2
  duration: 2000,
  origin:'down',
  distance:'300px',
  viewFactor: 0.2
});

ScrollReveal().reveal('.row text-center',{
  duration: 2000,
  origin:'top',
  distance:'300px'
});


$(function() {
  // Smooth Scrolling
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


  }

}
