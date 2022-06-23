import config  from "../config/config";
import axios from "axios";

console.log(config.baseURL)
 class EmployeeService{
    baseURL=config.baseURL;
    
    addEmployee(data){
        console.log("add employee member")
        return axios.post(`${this.baseURL}/create`,data);
    }
    getAllEmployee(){
        return axios.get(`${this.baseURL}/get`);
    } 
    getEmployee(employeeId) {
        return axios.get(`${this.baseURL}/get/${employeeId}`);
    }
    
    updateEmployee(id,data) {
        return axios.put(`${this.baseURL}/edit/${id}`, data);
    }
    
    deleteEmployee(employeeID) {
        return axios.delete(`${this.baseURL}/delete/${employeeID}`);
    }
    
}
export default new EmployeeService();
