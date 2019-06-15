import { Vue, Component, Prop } from "vue-property-decorator";
//import Component from 'vue-class-component'
/*
const t=` 
<div>
    <div id="map" style="width:800px;height:800px"></div>
            <div>ccc {{name}}{{exclamationMarks}}</div>
            <button @click="decrement">-</button>
            <button @click="increment">+</button>
          </div>`

@Component({
    template:"<p>zzzzzzzzzzzzzzzzz</p>"
})


export default class HelloComponent extends Vue {
//@Prop() name!: string;
//  @Prop() initialEnthusiasm!: number;
    enthusiasm = this.initialEnthusiasm;
    increment() {
        this.enthusiasm++;
    }
    decrement() {
        if (this.enthusiasm > 1) {
            this.enthusiasm--;
        }
    }
    get exclamationMarks(): string {
        return Array(this.enthusiasm + 1).join('!');
    }
}

*/
const t=` 
<div>
    <div id="map" style="width:800px;height:800px"></div>
    <div>ccc {{name}}</div>
  </div>`

@Component({
    template:t
})


export default class HelloComponent extends Vue {
    name="dddd"
}

