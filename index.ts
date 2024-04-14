#! /usr/bin/env node
import inquirer from "inquirer"

import chalk from "chalk"

let todo_list: string [] = [];

let while_condition: boolean = true;

 while (while_condition === true) {
    
    // ----------------------------options--------------------------

let option = await inquirer.prompt([{

    type: "list",
    name: "user_option",
    message: "Select an options",
    choices: ["Add" , "remove"]

}])
// / ----------------------------Add--------------------------
if(option.user_option === "Add") {

    let ans = await inquirer.prompt([{
        type: "Input",
        name: "user_ans",
        message: "write something to add in the todo list."

    }])

    if (ans.user_ans !== ''){
        todo_list.push(ans.user_ans);
        console.log(todo_list);
    }else{
        console.log('\nplease write something to add in the todo list')
    }
}

// ----------------------------remove--------------------------
else if (option.user_option === "remove"){

    let removeChoice = await inquirer.prompt([{

    type : "list",
    name : "remove_item",
    message : "\nselect item to remove",
    choices : todo_list
    }]);

    let index_to_remove = todo_list.indexOf(removeChoice.remove_item);

    if (index_to_remove >= 0){

        todo_list.splice(index_to_remove , 1);

        console.log('you removed : ' , removeChoice.remove_item);

console.log(todo_list);
    }
}
//-------------------confrim------------------------
let user_ans = await inquirer.prompt([{
    type: "confrim",
    name: "selection",
    message: "\nDo you want to continue?",
    default: true
}])

if(user_ans.selection === false){

while_condition = false;
}
 }
 console.log(`\nThank you for using todo list.`);
 
