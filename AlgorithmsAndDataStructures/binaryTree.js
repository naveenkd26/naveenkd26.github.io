
var root = new Node();

var appendNode = function(root, nameArray){
    var newNode = nameArray.pop();
    if(newNode){
        newNode = new Node(newNode);
    }

    if(root && newNode){
        if(!root.left){
            root.left = newNode;
        }
        else if(!root.right){
            root.right = newNode;
        }
        else if(root.left && root.right){
            root = root.left;
            root.left = newNode;
        }
        appendNode(root, nameArray);
    } else {
        return;
    }
};

var createBalancedBST = function(elementList, queue){
    var newNode;
    if(elementList.length > 0){
        newNode = new Node(elementList.shift());
    }
    var root = queue.shift();
    if(root && newNode){
        if(!root.left){
            root.left = newNode;
            queue.push(root.left);
            queue.unshift(root);
        } else if(!root.right){
            root.right = newNode;
            queue.push(root.right);  
        }
        createBalancedBST(elementList, queue);
    } else {
        return;
    }
};

var nodeCount = 0;
var level = 1;
var logNodeName = function(nodeName){
    console.log(nodeName);
    nodeCount++;
    if(nodeCount%2 === 0){
        level++;
        console.log('------LEVEL ' + level + '---------');
    }
};

var printBreadthFirst = function(queue){
    var node = queue.shift();
    if(node){
       if(node.left){
            logNodeName(node.left.name)
            queue.push(node.left);
        }
        if(node.right){
            logNodeName(node.right.name);
            queue.push(node.right);
        }
        printBreadthFirst(queue);
    } else {
        return;
    }
};

var createBinaryTree = function(){
    //appendNode(root, ['1', '2', '3', '4', '5', '6', '7']);
    createBalancedBST(['1', '2', '3', '4', '5', '6', '7'], [root]);
    printBreadthFirst([root]);
};

console.log(root);

createBinaryTree();