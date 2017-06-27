
var root = new Node();
var rootRef = root;

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

var createBinaryTree = function(){
    appendNode(root, ['1', '2', '3', '4', '5', '6', '7'].reverse());
};


console.log(root);