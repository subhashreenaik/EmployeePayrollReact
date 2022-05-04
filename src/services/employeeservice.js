import config  from "../config/config";
import axios from "axios";

console.log(config.baseURL)
 class EmployeeService{
    baseURL=config.baseURL;
    
    addEmployee(data){
        return axios.post(`${this.baseURL}employee`,data);
    }
    
}
export default new EmployeeService();
