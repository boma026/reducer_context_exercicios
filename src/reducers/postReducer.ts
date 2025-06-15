type AddList = {
    type: "add",
    payload: {
        title: string,
        body: string
    }
}

type ListActions = AddList;



export const postReducer = (postList: Post[], action:ListActions) => {
    switch(action.type){
        case:"add"
    }
} 