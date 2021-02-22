import {DomListener} from './DomListener';

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners)
        this.name = options.name || ''
        this.emitter = options.emitter
        this.unsubscribers = []
        this.prepare()
    }

    // Настариваем наш компенент до инит
    prepare() {
        
    }

    toHTML () {
        return ''
    }


    // Уведомляем слушатели про события event
    $emit(event, ...args) {
        this.emitter.emit(event, ...args)
    }

    // Подписываемся на события евент
    $on(event, fn) {
       const unsub = this.emitter.subscribe(event, fn)
       this.unsubscribers.push(unsub)
    }

    // Иниц компонент
    // Добавляем ДОМ слушатели
    init() {
        this.initDOMListeners()
    }


    // Удаляем компонент
    // Чистим слушатели
    destroy() {
        this.removeDOMListeners()
        this.unsubscribers.forEach(unsub => unsub())
    }
}