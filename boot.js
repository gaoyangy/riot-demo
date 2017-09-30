import {Flux, FluxRiot} from 'sav-flux'
import riot from 'riot/riot+compiler'
import todoModule from './store/store'
import http from './http'

let flux = new Flux({
  strict: true
})

flux.declare(todoModule)

FluxRiot({flux, riot})

console.log(riot)

riot.compile(function() {
  riot.mount('*')
})
riot.http = http
window.riot = riot
window.flux = flux
