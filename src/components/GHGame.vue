<template>
  <div>
    <h1>aasdasdsad</h1>
    <span class="Container" v-on:click="init">
      <i class="addBtn fas fa-plus" aria-hidden="true"></i>
    </span>

    <table>
    <tr>
      <td>
        <div class="number">
          <b>1</b>
        </div>
      <div id='plate1' v-bind:style="plate_style" v-on:click="nothing">
          <div class="gray_square" />
        </div>
      </td>
      <td>
        <div class="number">
          <b>2</b>
        </div>
        <div id='plate2' class="white_plate" v-on:click="nothing">
          <div class="gray_circle" />
        </div>
      </td>
      <td>
        <div class="number">
          <b>3</b>
        </div>
        <div id='plate3' class="black_plate" v-on:click="nothing">
          <div class="gray_triangle" />
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="number">
          <b>4</b>
        </div>
        <div id='plate4' class="black_plate" v-on:click="nothing">
          <div class="gray_square" />
        </div>
      </td>
      <td>
        <div class="number">
          <b>5</b>
        </div>
        <div id='plate5' class="white_plate" v-on:click="nothing">
          <div class="gray_circle" />
        </div>
      </td>
      <td>
        <div class="number">
          <b>6</b>
        </div>
        <div id='plate6' class="black_plate" v-on:click="nothing">
          <div class="gray_triangle" />
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div class="number">
          <b>7</b>
        </div>
        <div id='plate7' class="black_plate" v-on:click="nothing">
          <div class="gray_square" />
        </div>
      </td>
      <td>
        <div class="number">
          <b>8</b>
        </div>
        <div id='plate8' class="white_plate" v-on:click="nothing">
          <div class="gray_circle" />
        </div>
      </td>
      <td>
        <div class="number">
          <b>9</b>
        </div>
        <div id='plate9' class="black_plate" v-on:click="nothing">
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
      plate_style: []
    }
  },
  created () {
    // init();
  },
  computed: {
    temp: function () {
      return {
        black_plate: true
      }
    }
  },
  methods: {
    init () {
      this.createPlate()
      for (let i = 0; i < 9; i++) {
        this.plate_style[i] = this.objectPlateStyle(this.plate[i][0])
        console.log('this.plate_style[' + i + ']')
        console.log(this.plate_style[i])
      }
    },
    createPlate () {
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
    objectPlateStyle (style) {
      return {
        width: '10rem',
        height: '10rem',
        background: style
      }
    },
    rename (backgroundColor, shapeColor, shape) {
      switch (backgroundColor) {
        case '0':
          backgroundColor = 'black_plate'
          break
        case '1':
          backgroundColor = 'gray_plate'
          break
        case '2':
          backgroundColor = 'white_plate'
          break
      }
      switch (shapeColor) {
        case '0':
          backgroundColor = 'black_'
          break
        case '1':
          backgroundColor = 'gray_'
          break
        case '2':
          backgroundColor = 'white_'
          break
      }
      switch (shape) {
        case '0':
          backgroundColor = 'square'
          break
        case '1':
          backgroundColor = 'circle'
          break
        case '2':
          backgroundColor = 'triangle'
          break
      }
    },
    nothing () {
      console.log('nothing')
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
