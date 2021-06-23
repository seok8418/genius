<template>
  <div>
    <h1></h1>
    <span class="Container" v-on:click="inititializePlate">
      <i class="addBtn fas fa-plus" aria-hidden="true"></i>
    </span>
    <span v-bind:style="{fontSize: 30 + 'px', color: 'red'}" v-on:click="gyeolCheck">
      결! 버튼
    </span>
    <div>
      <div class="answerTable">
        <div class="answer"  v-for="(array, index) in correctAnswerList" :key="index">
              {{ array[0] + 1 }}   {{ array[1] + 1}}   {{ array[2] + 1 }}
        </div>
      </div>
      <table class="plateTable">
      <tr>
        <td>
          <div class="number">
            <b>1</b>
          </div>
          <div id='plate1' v-bind:class="[plateColor1, { selectedPlate: selectedPlate1, notSelectedPlate: !selectedPlate1 }]" v-on:click="[selectedPlate1 = !selectedPlate1, select(0)]">
            <div v-bind:class="shape1" />
          </div>
        </td>
        <td>
          <div class="number">
            <b>2</b>
          </div>
          <div id='plate2' v-bind:class="[plateColor2, { selectedPlate: selectedPlate2, notSelectedPlate: !selectedPlate2 }]" v-on:click="[selectedPlate2 = !selectedPlate2, select(1)]">
            <div v-bind:class="shape2" />
          </div>
        </td>
        <td>
          <div class="number">
            <b>3</b>
          </div>
          <div id='plate3' v-bind:class="[plateColor3, { selectedPlate: selectedPlate3, notSelectedPlate: !selectedPlate3 }]" v-on:click="[selectedPlate3 = !selectedPlate3, select(2)]">
            <div v-bind:class="shape3" />
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="number">
            <b>4</b>
          </div>
          <div id='plate4' v-bind:class="[plateColor4, { selectedPlate: selectedPlate4, notSelectedPlate: !selectedPlate4 }]" v-on:click="[selectedPlate4 = !selectedPlate4, select(3)]">
            <div v-bind:class="shape4" />
          </div>
        </td>
        <td>
          <div class="number">
            <b>5</b>
          </div>
          <div id='plate5' v-bind:class="[plateColor5, { selectedPlate: selectedPlate5, notSelectedPlate: !selectedPlate5 }]" v-on:click="[selectedPlate5 = !selectedPlate5, select(4)]">
            <div v-bind:class="shape5" />
          </div>
        </td>
        <td>
          <div class="number">
            <b>6</b>
          </div>
          <div id='plate6' v-bind:class="[plateColor6, { selectedPlate: selectedPlate6, notSelectedPlate: !selectedPlate6 }]" v-on:click="[selectedPlate6 = !selectedPlate6, select(5)]">
            <div v-bind:class="shape6" />
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="number">
            <b>7</b>
          </div>
          <div id='plate7' v-bind:class="[plateColor7, { selectedPlate: selectedPlate7, notSelectedPlate: !selectedPlate7 }]" v-on:click="[selectedPlate7 = !selectedPlate7, select(6)]">
            <div v-bind:class="shape7" />
          </div>
        </td>
        <td>
          <div class="number">
            <b>8</b>
          </div>
          <div id='plate8' v-bind:class="[plateColor8, { selectedPlate: selectedPlate8, notSelectedPlate: !selectedPlate8 }]" v-on:click="[selectedPlate8 = !selectedPlate8, select(7)]">
            <div v-bind:class="shape8" />
          </div>
        </td>
        <td>
          <div class="number">
            <b>9</b>
          </div>
          <div id='plate9' v-bind:class="[plateColor9, { selectedPlate: selectedPlate9, notSelectedPlate: !selectedPlate9 }]" v-on:click="[selectedPlate9 = !selectedPlate9, select(8)]">
            <div v-bind:class="shape9" />
          </div>
        </td>
      </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      plate: [],
      selectedPlates: [],
      answerList: [],
      correctAnswerList: [],
      plateColor1: 'black_plate',
      plateColor2: 'black_plate',
      plateColor3: 'black_plate',
      plateColor4: 'black_plate',
      plateColor5: 'black_plate',
      plateColor6: 'black_plate',
      plateColor7: 'black_plate',
      plateColor8: 'black_plate',
      plateColor9: 'black_plate',
      shape1: 'black_square',
      shape2: 'black_square',
      shape3: 'black_square',
      shape4: 'black_square',
      shape5: 'black_square',
      shape6: 'black_square',
      shape7: 'black_square',
      shape8: 'black_square',
      shape9: 'black_square',
      selectedPlate1: false,
      selectedPlate2: false,
      selectedPlate3: false,
      selectedPlate4: false,
      selectedPlate5: false,
      selectedPlate6: false,
      selectedPlate7: false,
      selectedPlate8: false,
      selectedPlate9: false
    }
  },
  computed: {
    computedSelectPlatesLength () {
      console.log('computed ')
      // if (this.selectedPlates.length === 3) {
      //   this.inputAnswer(this.selectedPlates[0], this.selectedPlates[1], this.selectedPlates[2])
      //   console.log('초기화 ' + this.selectedPlates.length)
      // }

      return this.selectedPlates.length
    }
  },
  created () {
    this.inititializePlate()
  },
  methods: {
    inititializePlate () {
      this.selectedPlates = []
      this.initSelectedPlate()
      this.answerList = []
      this.correctAnswerList = []
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

      this.shape1 = this.plate[0][1] + this.plate[0][2]
      this.shape2 = this.plate[1][1] + this.plate[1][2]
      this.shape3 = this.plate[2][1] + this.plate[2][2]
      this.shape4 = this.plate[3][1] + this.plate[3][2]
      this.shape5 = this.plate[4][1] + this.plate[4][2]
      this.shape6 = this.plate[5][1] + this.plate[5][2]
      this.shape7 = this.plate[6][1] + this.plate[6][2]
      this.shape8 = this.plate[7][1] + this.plate[7][2]
      this.shape9 = this.plate[8][1] + this.plate[8][2]

      this.findAnswer()
    },
    initSelectedPlate () {
      this.selectedPlate1 = false
      this.selectedPlate2 = false
      this.selectedPlate3 = false
      this.selectedPlate4 = false
      this.selectedPlate5 = false
      this.selectedPlate6 = false
      this.selectedPlate7 = false
      this.selectedPlate8 = false
      this.selectedPlate9 = false
    },
    setPlateColor () {
      var backgroundColor = ['black_plate', 'gray_plate', 'white_plate']
      var shapeColor = ['red_', 'blue_', 'yellow_']
      var shape = ['circle', 'triangle', 'square']
      for (let i = 0; i < 9; i++) {
        let num1 = Math.floor(Math.random() * 3)
        let num2 = Math.floor(Math.random() * 3)
        let num3 = Math.floor(Math.random() * 3)
        this.plate[i] = [backgroundColor[num1], shapeColor[num2], shape[num3]]
      }
    },
    findAnswer () {
      for (let i = 0; i < 9; i++) {
        for (let j = i + 1; j < 9; j++) {
          for (let k = j + 1; k < 9; k++) {
            if ((this.plate[i][0] === this.plate[j][0] && this.plate[j][0] === this.plate[k][0]) || ((this.plate[i][0] !== this.plate[j][0] && this.plate[j][0] !== this.plate[k][0] && this.plate[i][0] !== this.plate[k][0]))) {
              if ((this.plate[i][1] === this.plate[j][1] && this.plate[j][1] === this.plate[k][1]) || ((this.plate[i][1] !== this.plate[j][1] && this.plate[j][1] !== this.plate[k][1] && this.plate[i][1] !== this.plate[k][1]))) {
                if ((this.plate[i][2] === this.plate[j][2] && this.plate[j][2] === this.plate[k][2]) || ((this.plate[i][2] !== this.plate[j][2] && this.plate[j][2] !== this.plate[k][2] && this.plate[i][2] !== this.plate[k][2]))) {
                  this.answerList.push([i, j, k])
                }
              }
            }
          }
        }
      }
      console.log('정답목록')
      console.log(this.answerList)
    },
    inputAnswer (i, j, k) {
      for (let arr of this.answerList) {
        if (JSON.stringify(arr) === JSON.stringify([i, j, k])) {
          for (let arr2 of this.correctAnswerList) {
            if (JSON.stringify(arr2) === JSON.stringify([i, j, k])) {
              console.log('중복 오답')
              this.selectedPlates = []
              return false
            }
          }
          console.log('정답')
          this.correctAnswerList.push(arr)
          this.selectedPlates = []
          return true
        }
      }
      console.log('오답')
      this.selectedPlates = []
      return false
    },
    gyeolCheck () {
      if (this.correctAnswerList.length === this.answerList.length) {
        this.inititializePlate()
        console.log('결 정답')
      } else {
        console.log('결 오답')
      }
    },
    select (plateNumber) {
      if (this.selectedPlates.includes(plateNumber)) {
        for (let i = 0; i < this.selectedPlates.length; i++) {
          if (this.selectedPlates[i] === plateNumber) {
            this.selectedPlates.splice(i, 1)
            i--
          }
        }
        this.selectedPlates.sort()
      } else {
        this.selectedPlates.push(plateNumber)
        this.selectedPlates.sort()
      }
      this.selectedPlates.sort()

      if (this.selectedPlates.length >= 3) {
        this.inputAnswer(this.selectedPlates[0], this.selectedPlates[1], this.selectedPlates[2])
        this.selectedPlates = []
        this.initSelectedPlate()
      }
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
  margin-bottom: 1rem;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.plateTable {
  width: 30rem;
  height: 41rem;
  background: #4BAF4B;
  margin-right: auto;
}
.answerTable{
  float: left;
  width: 10rem;
  height: 41rem;
  background: white;
  border: 0.2rem solid black;
  margin-right: auto;
}
.answer{
  font-size: 2rem;
  border-bottom: 0.15rem solid black;
}
b {
  float: left;
  background: white;
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
.red_square{
  width: 5rem;
  height: 5rem;
  background: red;
  float: center;
  display: inline-block;
  margin-top: 2.5rem;
}
.red_circle {
  width: 5rem;
  height: 5rem;
  background: red;
  border-radius: 50%;
  float: center;
  display: inline-block;
  margin-top: 2.5rem;
}
.red_triangle {
  width: 0;
  height: 0;
  border-left: 2.5rem solid transparent;
  border-right: 2.5rem solid transparent;
  border-bottom: 5rem solid red;
  float: center;
  display: inline-block;
  margin-top: 2.5rem;
}
.blue_square{
  width: 5rem;
  height: 5rem;
  background: blue;
  float: center;
  display: inline-block;
  margin-top: 2.5rem;
}
.blue_circle {
  width: 5rem;
  height: 5rem;
  background: blue;
  border-radius: 50%;
  float: center;
  display: inline-block;
  margin-top: 2.5rem;
}
.blue_triangle {
  width: 0;
  height: 0;
  border-left: 2.5rem solid transparent;
  border-right: 2.5rem solid transparent;
  border-bottom: 5rem solid blue;
  float: center;
  display: inline-block;
  margin-top: 2.5rem;
}
.yellow_square{
  width: 5rem;
  height: 5rem;
  background: yellow;
  float: center;
  display: inline-block;
  margin-top: 2.5rem;
}
.yellow_circle {
  width: 5rem;
  height: 5rem;
  background: yellow;
  border-radius: 50%;
  float: center;
  display: inline-block;
  margin-top: 2.5rem;
}
.yellow_triangle {
  width: 0;
  height: 0;
  border-left: 2.5rem solid transparent;
  border-right: 2.5rem solid transparent;
  border-bottom: 5rem solid yellow;
  float: center;
  display: inline-block;
  margin-top: 2.5rem;
}
.selectedPlate {
  border: 0.5rem solid #50BCDF;
}
.notSelectedPlate{
  margin: 0.5rem;
}
</style>
