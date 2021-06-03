import { getEmployees, getOrders } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target //this sets the value clicked to a variable
        if (itemClicked.id.startsWith("employee")) { //this sorts out what is clicked
            const [, employeeId] = itemClicked.id.split("--") //this splits the class name and sets it to a variable employeeId

            for (const employee of employees) { //iterate over the employees
                if (employee.id === parseInt(employeeId)) { //if the employeeId matches the employee Id clicked...

                    const employeeOrders = orders.filter(o => o.employeeId === employee.id) //filter for only orders that matches order.employeeID with employee ID
                    const orderCount = employeeOrders.length //counts how many items are left in the array after filter

                    window.alert(` ${employee.name} sold ${orderCount} products `) //send alert when iteration is complete
                }
            }
        }
    }
)

const employees = getEmployees()
const orders = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}