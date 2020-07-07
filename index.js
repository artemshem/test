class Animal {
  constructor(options) {
    this.name = options.name;
    this.color = options.color;
  }

  voice() {
    console.log('Basic voice of ', this.name)
  }
}

const dog = new Animal({
  name: 'Rex',
  color: 'black'
})