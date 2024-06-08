import { createStore } from "easy-peasy"

const userModel={
    data:[],

}

const store=createStore({
    user:userModel
})
export default store;