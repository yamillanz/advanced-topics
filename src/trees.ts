//     10
//   4      20
// 2  8   17
interface NodeTree {
  value: number;
  left?: NodeTree;
  right?: NodeTree;
}

class BinarySearchTree {
  root: NodeTree | null = null;
  constructor(rootValue: number) {
    this.root = { value: rootValue };
  }

  findSheet(valueToInsert: number, currentNode: NodeTree | null = this.root): NodeTree | null {
    if (!currentNode?.left && !currentNode?.right) {
      return currentNode;
    }
    if (valueToInsert > currentNode.value && !currentNode.right) {
      return currentNode;
    }

    if (valueToInsert < currentNode.value && !currentNode.left) {
      return currentNode;
    }

    if (valueToInsert > currentNode.value) {
      return this.findSheet(valueToInsert, currentNode.right);
    }
    return this.findSheet(valueToInsert, currentNode.left);
  }

  insert(value: number) {
    let newNode: NodeTree = { value };
    if (!this.root) {
      return (this.root = { ...newNode });
    }
    let nodoSheet = this.findSheet(newNode?.value);
    if (nodoSheet) {
      if (newNode?.value > nodoSheet?.value) {
        nodoSheet.right = newNode;
      } else {
        nodoSheet.left = newNode;
      }
    }
  }

  insertNR(value: number) {
    const newNode: NodeTree = { value };
    if (this.root === null) {
      return (this.root = newNode);
    }
    let currentNode: NodeTree = this.root;
    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          break;
        }
        currentNode = currentNode.left;
      }
      if (!currentNode.right) {
        currentNode.right = newNode;
        break;
      }
      currentNode = currentNode.right;
    }
  }
}

let myTreeSera = new BinarySearchTree(10);
// myTreeSera.insert(20);
// myTreeSera.insert(4);
// myTreeSera.insert(2);
// myTreeSera.insert(8);
// myTreeSera.insert(17);

myTreeSera.insertNR(20);
myTreeSera.insertNR(4);
myTreeSera.insertNR(2);
myTreeSera.insertNR(8);
myTreeSera.insertNR(17);

console.log(myTreeSera);
