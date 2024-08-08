const ToDo = require('../models/todoSchema');

exports.createToDo = async(req, res) => {
    try {
        let todo = new ToDo(req.body)
        await todo.save();
        res.json({
           success: true
       });
    } catch(error) {
        res.json({
            success:false,
            error: error
        });
    }

};

exports.getAllToDo = async(req, res) => {
    try {
        const todos = await ToDo.find()
        res.json({
            success:true,
            data:todos
        });
    } catch(error) {
        res.json({
            success:false,
            error:error
        })
    }
};

exports.getToDobyID = async(req, res) => {
    try {
        const todo1 = await ToDo.findById(req.params.id);
        res.json({
            success:true,
            data:todo1
        })

    } catch(error) {
        res.json({
            success:false,
            error:error
        })
    }
}

exports.getToDobyIDandDel = async(req, res) => {
    try {
        const todo2 = await ToDo.findByIdAndDelete(req.params.id);
        res.json({
            success:true,
            data:todo2
        })

    } catch(error) {
        res.json({
            success:false,
            error:error
        })
    }

}

exports.getToDobyIDandUpdate = async(req, res) => {
    try {
        const todo3 = await ToDo.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json({
            success:true,
            data:todo3
        })

    } catch(error) {
        res.json({
            success:false,
            error:error
        })
    }


}