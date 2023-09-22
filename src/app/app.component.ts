import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'web-scroll-effect-sunset';

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    this.animateFirstSection();
    this.animateSecondSection();
  }

  animateFirstSection() {
    let scrollTriggerToBgSunset: gsap.DOMTarget | ScrollTrigger.Vars = {
      trigger: '.bg-sunset',
      scrub: 1,

      start: 'top top',
      end: 'bottom top',
    };

    gsap.to('#hero-text', {
      duration: 2,
      opacity: 0,
      y: -200,
      scrollTrigger: scrollTriggerToBgSunset,
    });
    gsap.to('.lets-start', {
      duration: 2,
      scale: 2,
      opacity: 0,
      y: -200,
      scrollTrigger: scrollTriggerToBgSunset,
    });
    gsap.to('#sun-set-text', {
      duration: 2,
      y: 130,
      scrollTrigger: scrollTriggerToBgSunset,
    });
    gsap.to('#cloud-1', {
      duration: 2,
      x: -200,
      scrollTrigger: scrollTriggerToBgSunset,
    });
    gsap.to('#cloud-2', {
      duration: 2,
      x: 200,
      scrollTrigger: scrollTriggerToBgSunset,
    });
    gsap.to('#cloud-3', {
      duration: 2,
      x: -500,
      scrollTrigger: scrollTriggerToBgSunset,
    });
    gsap.to('#cloud-4', {
      duration: 2,
      x: 500,
      scrollTrigger: scrollTriggerToBgSunset,
    });
    gsap.to('#mountain-1', {
      duration: 2,
      y: 250,
      scrollTrigger: scrollTriggerToBgSunset,
    });
    gsap.to('#mountain-2', {
      duration: 2,
      y: 250,
      scrollTrigger: scrollTriggerToBgSunset,
    });
    gsap.to('#mountain-3', {
      duration: 2,
      y: 200,
      scrollTrigger: scrollTriggerToBgSunset,
    });
    gsap.to('#mountain-4', {
      duration: 2,
      y: 200,
      scrollTrigger: scrollTriggerToBgSunset,
    });
    gsap.to('#mountain-5', {
      duration: 2,
      y: 200,
      scrollTrigger: scrollTriggerToBgSunset,
    });
    gsap.to('#mountain-6', {
      duration: 2,
      y: 200,
      scrollTrigger: scrollTriggerToBgSunset,
    });
    gsap.to('#mountain-7', {
      duration: 2,
      y: 200,
      scrollTrigger: scrollTriggerToBgSunset,
    });
    gsap.to('#mountain-8', {
      duration: 2,
      y: 100,
      scrollTrigger: scrollTriggerToBgSunset,
    });
    gsap.to('#mountain-9', {
      duration: 2,
      scale: 1.5,
      scrollTrigger: scrollTriggerToBgSunset,
    });
    gsap.to('#mountain-10', {
      duration: 2,
      scale: 1.5,
      scrollTrigger: scrollTriggerToBgSunset,
    });
    gsap.to('#trees', {
      duration: 2,
      scale: 1.2,
      scrollTrigger: scrollTriggerToBgSunset,
    });
    gsap.to('#sun', {
      duration: 2,
      scale: 2,
      scrollTrigger: scrollTriggerToBgSunset,
    });
  }

  animateSecondSection() {
    let scrollTriggerToBgBlueSection: gsap.DOMTarget | ScrollTrigger.Vars = {
      trigger: '.blue-section',
      scrub: 1,
      start: '-70% top',
      end: 'top top',
    };

    let scrollTriggerToGridItems: gsap.DOMTarget | ScrollTrigger.Vars = {
      trigger: '.blue-section',
      scrub: 1,
      start: '-500 top',
      end: 'top top',
    };

    gsap.from('.more-sun-set', {
      duration: 2,
      scale: 2,
      y: 100,
      gap: 5,
      scrollTrigger: scrollTriggerToBgBlueSection,
    });

    gsap.from('.item-1', {
      duration: 2,
      translateY: '120%',
      scrollTrigger: scrollTriggerToGridItems,
    });

    gsap.from('.item-2', {
      duration: 2,
      translateY: '150%',
      scrollTrigger: scrollTriggerToGridItems,
    });

    gsap.from('.item-3', {
      duration: 2,
      translateY: '180%',
      scrollTrigger: scrollTriggerToGridItems,
    });

    gsap.from('.item-4', {
      duration: 2,
      translateY: '200%',
      scrollTrigger: scrollTriggerToGridItems,
    });
  }

  smoothTransitionAction() {
    let scrollTo = document.querySelector('#blue-section');
    scrollTo?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
