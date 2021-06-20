<template>
	<div>
		<h1>aasdasdsad</h1>
		<span class="Container" v-on:click="crate_plate">
			<i class="addBtn fas fa-plus" aria-hidden="true"></i>
		</span>
		
		<table>
		<tr>
			<td>
				<div class="number">
					<b>1</b>
				</div>
				<div class="black_plate" v-on:click="">
					<div class="gray_square" v-on:click=""/>
				</div>
			</td>
			<td>
				<div class="number">
					<b>2</b>
				</div>
				<div class="white_plate" v-on:click="">
					<div class="gray_circle" v-on:click=""/>
				</div>
			</td>
			<td>
				<div class="number">
					<b>3</b>
				</div>
				<div class="black_plate" v-on:click="">
					<div class="gray_triangle" v-on:click=""/>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div class="number">
					<b>4</b>
				</div>
				<div class="black_plate" v-on:click="">
					<div class="gray_square" v-on:click=""/>
				</div>
			</td>
			<td>
				<div class="number">
					<b>5</b>
				</div>
				<div class="white_plate" v-on:click="">
					<div class="gray_circle" v-on:click=""/>
				</div>
			</td>
			<td>
				<div class="number">
					<b>6</b>
				</div>
				<div class="black_plate" v-on:click="">
					<div class="gray_triangle" v-on:click=""/>
				</div>
			</td>
		</tr>
		<tr>
			<td>
				<div class="number">
					<b>7</b>
				</div>
				<div class="black_plate" v-on:click="">
					<div class="gray_square" v-on:click=""/>
				</div>
			</td>
			<td>
				<div class="number">
					<b>8</b>
				</div>
				<div class="white_plate" v-on:click="">
					<div class="gray_circle" v-on:click=""/>
				</div>
			</td>
			<td>
				<div class="number">
					<b>9</b>
				</div>
				<div class="black_plate" v-on:click="">
					<div class="gray_triangle" v-on:click=""/>
				</div>
			</td>
		</tr>
		</table>
	</div>
</template>

<script>
export default {
	data() {
		return{
			background_color:['black', 'gray', 'white'],
			shape_color: ['black', 'gray', 'white'],
			shape: ['circle', 'triangle', 'square']
		}
	
	},
	methods: {
		init(){
		
		},
		crate_plate(){
			var background_color, shape_color, shape;
			var plate= [];
			var i;
			for (var i = 0; i<9; i++){
				background_color = Math.floor(Math.random() * 3);
				shape_color = Math.floor(Math.random() * 3);
				shape = Math.floor(Math.random() * 3);
				plate[i]=[background_color, shape_color, shape]
				
				
				
				//console.log(plate[i][0]);
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