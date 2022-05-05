import config  from "../config/config";
import axios from "axios";

console.log(config.baseURL)
 class EmployeeService{
    baseURL=config.baseURL;
    
    addEmployee(data){
        console.log("add employee member")
        return axios.post(`${this.baseURL}employee`,data);
    }
    getAllEmployee(){
        return axios.get(`${this.baseURL}employee`);
    } 
    getEmployee(employeeID) {
        return axios.get(`${this.baseURL}employee/${employeeID}`);
    }
    
    updateEmployee(employeeID,data) {
        return axios.put(`${this.baseURL}employee/${employeeID}`, data);
    }
    
    deleteEmployee(employeeID) {
        return axios.delete(`${this.baseURL}employee/${employeeID}`);
    }
    
}
export default new EmployeeService();
