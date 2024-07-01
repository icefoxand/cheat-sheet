// 연결 리스트란

// 연결 리스트는 선형적인 데이터 구조라는 점에서 배열과 유사합니다. 
// 하지만 배열과 달리, 연결 리스트의 요소(elements)들은 특정 메모리 주소나 인덱스에 저장되지 않습니다.
// 오히려 각 요소는 포인터 또는 다음 객체에 대한 링크를 가지는 독립적인 객체에 가깝습니다.

// 연결 리스트의 각 요소를 노드(node)라 부릅니다.
// 연결 리스트의 가장 첫 번째 지점을 헤드(head)라 부릅니다.
// 헤드는 연결 리스트의 첫 번째 노드를 의미합니다. 
// 마지막 노드는 null을 가르킵니다. 만약 연결 리스트가 비어있는 경우, 헤드는 null을 참조하게 됩니다.

const list = {
  head: {
    value: 6,
    next: {
      value: 10,
      next: {
        value: 12,
        next: {
          value: 3,
          next: null,
        },
      },
    },
  },
};

// 연결 리스트의 장점
// 연결 리스트는 데이터 구조의 큰 틀을 바꾸지 않고 노드를 추가하거나 삭제하기 쉽다는 장점이 있습니다. 이러한 점이 배열과 대비되는 점입니다.

// 연결 리스트의 단점
// 연결 리스트는 탐색이 느립니다. 배열과 달리, 연결 리스트는 데이터에 무작위 접근(random access)을 할 수 없기 때문입니다. 노드들은 첫 번째 노드부터 순차적으로만 접근해야 합니다.
// 연결 리스트는 배열보다 더 많은 메모리를 사용합니다. 왜냐하면 각 노드는 포인터를 담고 있기 때문입니다.

// 연결 리스트의 유형
// 연결 리스트는 크게 3가지 유형이 있습니다.
// 단일 연결 리스트(Singly Linked Lists) : 각 노드는 하나의 포인터만 가집니다. 우리가 위에서 이야기한 유형이 단일 연결 리스트입니다.
// 이중 연결 리스트(Doubly Linked Lists) : 각 노드는 2개의 포인터를 가지는데, 하나는 다음 노드를 그리고 나머지 하나는 이전 노드를 가르킵니다.
// 원형 연결 리스트(Circular Linked Lists) : 연결 리스트를 응용한 유형으로, 마지막 노드의 포인터가 첫 노드 또는 특정 노드를 가르키고 있는 마치 루프 형태를 가지는 유형을 말합니다.

class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}
class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

// 실례

let node1 = new ListNode(2)
let node2 = new ListNode(5)
node1.next = node2

let list1 = new LinkedList(node1)
console.log(list1.head.next.data)

// 헬퍼메소드
// 1. size()
size() {
    let count = 0; 
    let node = this.head;
    while (node) {
        count++;
        node = node.next
    }
    return count;
}
// 2. clear()
clear() {
    this.head = null;
}
// 3. getLast()
getLast() {
    let lastNode = this.head;
    if (lastNode) {
        while (lastNode.next) {
            lastNode = lastNode.next
        }
    }
    return lastNode
}
// 4. getFirst()
getFirst() {
    return this.head;
}

// 참고 https://www.freecodecamp.org/korean/news/implementing-a-linked-list-in-javascript/