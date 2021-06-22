<template>
  <div>
    <h1>{{plateColor1}} {{plateColor2}}</h1>
    <span class="Container" v-on:click="init">
      <i class="addBtn fas fa-plus" aria-hidden="true"></i>
    </span>

    <table>
    <tr>
      <td>
        <div class="number">
          <b>1</b>
        </div>
      <div id='plate1' v-bind:class="plateColor1" v-on:click="nothing">
          <div class="gray_square" />
        </div>
      </td>
      <td>
        <div class="number">
          <b>2</b>
        </div>
        <div id='plate2' v-bind:class="plateColor2" v-on:click="nothing">
          <div class="gray_circle" />
        </div>
      </td>
      <td>
        <div class="number">
          <b>3</b>
        </div>
        <div id='plate3' v-bind:class="plateColor3" v-on:click="nothing">
          <div class="gray_triangle" />
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="number">
          <b>4</b>
        </div>
        <div id='plate4' v-bind:class="plateColor4" v-on:click="nothing">
          <div class="gray_square" />
        </div>
      </td>
      <td>
        <div class="number">
          <b>5</b>
        </div>
        <div id='plate5' v-bind:class="plateColor5" v-on:click="nothing">
          <div class="gray_circle" />
        </div>
      </td>
      <td>
        <div class="number">
          <b>6</b>
        </div>
        <div id='plate6' v-bind:class="plateColor6" v-on:click="nothing">
          <div class="gray_triangle" />
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="number">
          <b>7</b>
        </div>
        <div id='plate7' v-bind:class="plateColor7" v-on:click="nothing">
          <div class="gray_square" />
        </div>
      </td>
      <td>
        <div class="number">
          <b>8</b>
        </div>
        <div id='plate8' v-bind:class="plateColor8" v-on:click="nothing">
          <div class="gray_circle" />
        </div>
      </td>
      <td>
        <div class="number">
          <b>9</b>
        </div>
        <div id='plate9' v-bind:class="plateColor9" v-on:click="nothing">
          <div class="gray_triangle" />
        </div>
      </td>
    </tr>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      plate: [],
      plate_style: [],
      plateColor1: 'black_plate',
      plateColor2: 'black_plate',
      plateColor3: 'black_plate',
      plateColor4: 'black_plate',
      plateColor5: 'black_plate',
      plateColor6: 'black_plate',
      plateColor7: 'black_plate',
      plateColor8: 'black_plate',
      plateColor9: 'black_plate'
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.setPlateColor()
      this.plateColor1 = this.plate[0][0]
      this.plateColor2 = this.plate[1][0]
      this.plateColor3 = this.plate[2][0]
      this.plateColor4 = this.plate[3][0]
      this.plateColor5 = this.plate[4][0]
      this.plateColor6 = this.plate[5][0]
      this.plateColor7 = this.plate[6][0]
      this.plateColor8 = this.plate[7][0]
      this.plateColor9 = this.plate[8][0]
    },
    setPlateColor () {
      var backgroundColor = ['black_plate', 'gray_plate', 'white_plate']
      var shapeColor = ['black_', 'gray_', 'white_']
      var shape = ['circle', 'triangle', 'square']
      for (let i = 0; i < 9; i++) {
        let num1 = Math.floor(Math.random() * 3)
        let num2 = Math.floor(Math.random() * 3)
        let num3 = Math.floor(Math.random() * 3)
        // rename(backgroundColor, shapeColor, shape)
        this.plate[i] = [backgroundColor[num1], shapeColor[num2] + shape[num3]]
        // console.log(shapeColor)
        // this.plate_style.background='white'
        // console.log(this.plate_style)
        // console.log(this.plate_style.background)
        // console.log("this.plate   " + this.plate[i])
      }
    },
    nothing () {
      this.plateColor1 = 'black_plate'
      console.log(this.plateColor1)
    }
  }
}
</script>

<style scoped>
.Container {
  float: center;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: inline-block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
  margin-bottom: 5rem;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
table {
  width: 30rem;
  height: 30rem;
  background: brown;
}
b {
  color: black;
  font-size: 2rem;
}
.black_plate {
  width: 10rem;
  height: 10rem;
  background: black;
}
.gray_plate {
  width: 10rem;
  height: 10rem;
  background: gray;
}
.white_plate {
  width: 10rem;
  height: 10rem;
  background: white;
}
.gray_square{
  width: 5rem;
  height: 5rem;
  background: gray;
  float: center;
  display: inline-block;
  margin-top: 2.5rem;
}
.gray_circle {
  width: 5rem;
  height: 5rem;
  background: gray;
  border-radius: 50%;
  float: center;
  display: inline-block;
  margin-top: 2.5rem;
}
.gray_triangle {
  width: 0;
  height: 0;
  border-left: 2.5rem solid transparent;
  border-right: 2.5rem solid transparent;
  border-bottom: 5rem solid gray;
  float: center;
  display: inline-block;
  margin-top: 2.5rem;
}
</style>
