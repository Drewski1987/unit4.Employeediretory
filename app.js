import express from 'express'
import employees from '#db/employees'
const app = express()



app.route('/').get((req, res)=>{
    res.send("Hello employees!")
})



app.route("/employees").get((req, res)=>{
    res.send(employees)
})

app.route("/employees/random").get((req, res)=>{
    if (employees.length === 0) {
        return res.status(404).send("No employees found.");
    }else{
        const random = Math.floor(Math.random() * employees.length);
        const randomEmployee = employees[random];
        res.send(randomEmployee)
    }
})

app.route("/employees/:id").get((req, res)=>{
    const id = Number(req.params.id)
    const found = employees.find(employee => employee.id === id)
    if(found) {
        res.send(found)
    }else{
        res.status(404).send("No employees with that id found.")
    }
})









export default app