
//Write a function that given a link list length and two fib seq numbers
//Lucas number: same as Fib but can start anywhere 
//args: limit, intial and second
// intial and second are the first 2 of limit

//should reject invalid fib seq numbers

class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor (head = null) {
        this.head = head;
    }

    append(value) {
        const newNode = new Node (value);
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    toString() {
        let current = this.head;
        let string = '';
        while (current.next) {
            string += `{ ${current.value} } --> `;
            current = current.next;
        }
        string += `{ ${current.value} } --> NULL`;
        return string;
    }



}

const lucasList = (count, first, second) => {
    if(count>=2 && typeof first === 'number' && typeof second === 'number') { 
        const initial = new Node(first);
        let linkList = new LinkedList(initial);
        linkList.append(second);

        let nextNumber;

        count = count - 2;
        while(count>0) {

            nextNumber = first+second;
            linkList.append(nextNumber);
            //
            first = second;
            second = nextNumber;
            count--;
        }
        // 
        console.log(linkList.toString());
    } else {
        return console.error('you broke this, invalid inputs');

    }

}


lucasList(10,0,1);
lucasList(0,0,1);
lucasList();
lucasList(5,13,6);