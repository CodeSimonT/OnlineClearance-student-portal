import { create } from "zustand";

const deficiencyModalStore = create((set)=>({
    clearanceID:null,
    showDeficiencyModal:false,
    department:null,

    deficiencyModalSetter: (show,id,department)=>{
        set({
            clearanceID:id,
            showDeficiencyModal:show,
            department
        })
    }
}))

export default deficiencyModalStore;