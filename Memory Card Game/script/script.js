const classes = [
	'tcat',
	'tsquirrel',
	'theart',
	'trocket',
	'tbird',
	'thome',
	'tlotus',
	'tboat'
];

const tangram = `
<div class="t">
  <svg viewbox="-50 -50 200 200" >
    <use class="bt-1" xlink:href="#tangram1" transform="translate(0,0)"/>
    <use class="bt-2 red" xlink:href="#tangram1" transform="translate(0,0) scale(-1,1) rotate(90 0 0)"/>
    <use class="st-1" xlink:href="#tangram1" transform="translate(25,75) scale(.5,.5) rotate(-90 0 0)"/>
    <use class="mt" xlink:href="#tangram1" transform="translate(100,49.5) scale(.7142,.7142) rotate(45 0 0)"/>
    <use class="st-2" xlink:href="#tangram1" transform="translate(100,50) scale(.5,.5) rotate(-180 0 0)"/>
    <use class="sq" xlink:href="#tangram2"/>
    <use class="rh" xlink:href="#tangram3"/>
  </svg>
</div>
`
class MemoryGame {
	constructor (selector) {
		this.selector = selector
		this.init()
	}
	init () {
		this.randomize()
		this.buildGrid()
		this.revealed = []	    
	}
	randomize () {
		this.classes = this.shuffle(classes.concat(classes))
	}
	shuffle (array) {		
		array.sort( function(a, b) {return 0.5 - Math.random()} );
		return array;
	}
	buildGrid () {
		let html = ''
		for (let i = 0; i<this.classes.length; i++ ) {
			html += tangram;
		}
		this.selector.innerHTML = html;
		this.cards = this.selector.querySelectorAll('.t')
		this.classes.forEach ( (el, i) => {
			const card = this.cards[i]
			card.classList.add(el)
			card.setAttribute( 'data-class', el)
			this.addCardListeners(card)
		})

	}
	checkMatch () {
		return this.revealed.length === 2 && this.revealed[0].getAttribute('data-class') === this.revealed[1].getAttribute('data-class')
	}
	addCardListeners (el) {

		el.addEventListener( 'mouseenter', (e) => {

			if (el.classList.contains('revealed')){
				return
			}
			
			if ( this.revealed.length < 2 ) {
				return
			}

			Array.prototype.slice.call(this.revealed).forEach( (item) => {
				item.classList.remove('revealed')
			})
			this.revealed = []
		})

		el.addEventListener( 'click', (e) => {

			if (el.classList.contains('revealed')) {
				return
			}
			
			el.classList.add('revealed');
			this.revealed.push(el)
			if ( this.checkMatch() ) {
				Array.prototype.slice.call(this.revealed).forEach( (item) => {
				  item.classList.add('hidden')
				  this.revealed = []
			  })
			}

		}, false );

	}
}

let memory = new MemoryGame(document.getElementById("tangramgrid"));
