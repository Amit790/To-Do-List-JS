// var state={
//     tasklist:[
//         {
//             imageUrl:"",
//             taskTitle:"",
//             taskDescription:""
//         },
//         {
//             imageUrl:"",
//             taskTitle:"",
//             taskDescription:""
//         },
//         {
//             imageUrl:"",
//             taskTitle:"",
//             taskDescription:""
//         },
//         {
//             imageUrl:"",
//             taskTitle:"",
//             taskDescription:""
//         },
//         {
//             imageUrl:"",
//             taskTitle:"",
//             taskDescription:""
//         }
//     ]
// };
var state={
    taskList:[],
};

const taskContents=document.querySelector(".task__contents");
const taskModal=document.querySelector(".task__modal__body");
// console.log(taskContents);
// console.log(taskModal);

// Template for the card on screen. 
// Arrow function used.
const htmlTaskCOntents=({id,title,type,description,url})=>`
<div class='col-md-6 col-lg-4 mt-3' id=${id}>
    <div class='card shadow-sm task__card'>
        <div class="card-header d-flex justify-content-end task__card__header">

            <button type='button' class='btn btn-primary mr-1.5' name=${id}>
                <i class='fas fa-pencil-alt' name=${id}></i>
            </button>

            <button type='button' class='btn btn-danger mr-1.5' name=${id}>
                <i class='fas fa-trash-alt' name=${id}></i>
            </button>

        </div>
        
        <div class='card-body'>

         ${
            url && 
            `<img width='100%' src=${url} alt='Card Image' class='card-image-top md-3 rounded-lg'>`
          }

        </div>

    </div>
</div>
`;