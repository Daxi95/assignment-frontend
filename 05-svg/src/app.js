import router from './router'
import homeTpl from './templates/home.hbs'
import simpleTpl from './templates/simple.hbs'
import styleTpl from './templates/style.hbs'
import animationTpl from './templates/animation.hbs'
import textTpl from './templates/text.hbs'
import interactionTpl from './templates/interaction.hbs'
import notFoundTpl from './templates/not-found.hbs'

import $ from 'jquery'

const app = document.getElementById('app')

function index() {
  app.innerHTML = homeTpl()
}

function simple() {
  app.innerHTML = simpleTpl()
}

function style() {
  app.innerHTML = styleTpl()
}

function animation() {
  app.innerHTML = animationTpl()
}

function text() {
  app.innerHTML = textTpl()
}

function interaction() {
  app.innerHTML = interactionTpl()

  let currentX = 0
  let widthDragButton = $(".button-draggable").attr('width')
  let widthViewport = $(".commit-button").attr('width')
  let widthButton = parseInt($(".button-background").attr('width'))
  let currentButtonWidth = 0
  let ratio = widthViewport/widthButton
  let isDragging = false

  $(".button-draggable").on('mousedown', e => {
      currentX = e.clientX
      isDragging = true
  });

  $(".button-draggable").on('mousemove', e => {
      if(!isDragging)
        return

      let dx = parseInt(e.clientX - currentX)
      currentButtonWidth = parseInt(widthDragButton) + parseInt(dx/ratio)

      if(currentButtonWidth >= widthDragButton && currentButtonWidth <= widthButton) {
        $(".button-draggable").attr('width', currentButtonWidth)
        $(".button-arrow").attr('transform', `translate(${currentButtonWidth - widthDragButton},0)`)
      }
  });

  $(".button-draggable").on('mouseup', e => {
      isDragging = false
      if(currentButtonWidth >= widthButton) { //update button state
        $(".text-commited").removeClass("hidden")
        $(".button-draggable").removeClass()
        $(".button-arrow").removeClass()
      }
      else {  //reset button state
        $(".button-draggable").attr('width', widthDragButton)
        $(".button-arrow").attr('transform', 'translate(0,0)')
      }
  });
}

function notFound() {
  app.innerHTML = notFoundTpl()
}
router('/', index)
router('/simple', simple)
router('/style', style)
router('/animation', animation)
router('/text', text)
router('/interaction', interaction)
router('*', notFound)
router()
