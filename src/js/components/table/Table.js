

import {ExcelComponent} from '../../core/ExcelComponent'
import {createTable} from './table.template'
import {$} from '../../core/dom'
import { resizeHandler } from './table.resize'
import { shouldResize } from './table.function'

export class Table extends ExcelComponent {
  static className() {
     return  'excel__table'
  } 

  constructor($root) {
    super($root, {
      listeners: ['mousedown']
    })
  }

  toHTML() {
    return createTable(100)
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event)
    }
  }
}
