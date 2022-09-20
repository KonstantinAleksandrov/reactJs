// object example node
const n1 = {
  data: 100
}

const n2 = {
  data: 255
}

n1.next = n2

// class example node

class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

// class example of LinkedList

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head)

    this.size++
  }

  // Insert last node
  insertLast(data) {
    const node = new Node(data)
    let current

    if (!this.head) {
      this.head = node
    } else {
      current = this.head

      while (current.next) {
        current = current.next
      }

      current.next = node
    }

    this.size++
  }

  // Insert at index
  insertAt(data, position) {
    if(position > this.size || position < 1){
      return
    }

    if (position === 1) {
      this.insertFirst(data)
      return
    }

    let current = this.head, previous, node = new Node(data)

    for (let i = 2; i <= position; i++) {
      previous = current
      current = current.next
    }

    node.next = current
    previous.next = node

    this.size++
  }

  // Get at index
  getAt(position){
    let current = this.head
    for(let i = 1; i <= position && current;i++){
      if(i === position){
        return current.data
      }
      current = current.next
    }
    return null
  }

  // Remove first
  removeFirst(){
    if(this.head.next) {
      this.head = this.head.next
      this.size--
    }
  }

  // Remove last
  removeLast(){
    if(this.head.next) {

      if(this.size === 1){
        this.removeFirst()
      }
      let current = this.head
      for(let i = 1; i <= this.size; i++){
        if(i === this.size - 1){
          current.next = null
        } else {
          current = current.next
        }

      }

    }
  }

  // Remove at index
  removeAt(position){
    if(position > this.size || position < 1){
      return
    }

    let current = this.head, previous

    if(position === 1) {
      this.head = current.next
    } else {
      for (let i = 1; i <= position; i++) {
        if(position === i){
          previous.next = current.next
        }
        previous = current
        current = current.next
      }
    }

    this.size--
  }

  // Clear list
  clear(){
    this.head = null
    this.size = 0
  }

  // Print list Data
  printData() {
    let current = this.head

    for(let i = 1; current; i++){
      console.log(i + " element is ",current.data)
      current = current.next
    }
  }
}

const myLinkedList = new LinkedList()
myLinkedList.insertFirst(100)
myLinkedList.insertFirst(200)
myLinkedList.insertFirst(300)
myLinkedList.insertLast(1)

myLinkedList.printData()

myLinkedList.removeLast()
myLinkedList.printData()


