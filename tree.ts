class Tree {
  value: number;
  left: Tree | null;
  right: Tree | null;
  constructor(value: number) {
    this.value = value; /* initiate the tree with a value : number **/
    this.right = null; /* initiate the right **/
    this.left = null; /* initiate the left **/
  }
  isEmpty() {
    if (this.value === null) {
      return true;
    } else {
      return false;
    }
  }
  fetchRootValue() {
    return this.value;
  }
  addNode(value: number) {
    if (this.isEmpty() === true) {
      this.value = value;
      console.log(`No root value yet, setting it to ${value}`);
      return null;
    } else if (value > this.value) {
      this.shiftRight(value);
      const parentValue = this.value;
      return console.log(
        `Adding ${value} right, Parent value is ${parentValue}`
      );
    } else {
      this.shiftLeft(value);
      const parentValue = this.value;
      return console.log(
        `Adding ${value} left, Parent value is ${parentValue}`
      );
    }
  }
  shiftRight(value: number) {
    if (this.right === null) {
      this.right = new Tree(value); //create a new Tree node
    } else {
      this.right.addNode(value);
    }
  }
  shiftLeft(value: number) {
    if (this.left === null) {
      this.left = new Tree(value);
    } else {
      this.left.addNode(value);
    }
  }
  searchTree(value: number): boolean {
    if (this.value === value) {
      console.log(`Match found: ${this.value}`);
      return true;
    } else if (value > this.value && this.right !== null) {
      return this.right.searchTree(value);
    } else if (value < this.value && this.left !== null) {
      return this.left.searchTree(value);
    } else {
      console.log("no matching values in tree");
      return false;
    }
  }
}

const maple = new Tree(3);
console.log(maple.isEmpty());
maple.addNode(5);
maple.addNode(2);
maple.addNode(1);
maple.addNode(6);
maple.searchTree(6);
// console.log(maple.fetchRootValue());
// console.log(maple.left?.fetchRootValue());
// console.log(maple.right?.fetchRootValue());
