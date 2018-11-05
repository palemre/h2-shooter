const shooter = {}

/***
 * SET UP
 ***/

 shooter.$container = document.querySelector('.shooter') //dollar à tous les éléments du DOM
 shooter.$start = shooter.$container.querySelector('.start')
 shooter.$score = shooter.$container.querySelector('.score .value')
 shooter.$timer = shooter.$container.querySelector('.timer')
 shooter.$targets = shooter.$container.querySelector('.targets')


 /***
 * METHODS
 ***/

 shooter.addTarget = () =>
 {
     //Create target
     const $target = document.createElement('div')
     $target.classList.add('target')
     $target.style.top = `${Math.random() * 100}%`
     $target.style.left = `${Math.random() * 100}%`
     shooter.$targets.appendChild($target)
 }

 shooter.addTarget()