import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyDetailsService {

  private REST_API_GET = "http://localhost:5000/getAllCompanies";
  private REST_API_SAVE = "http://localhost:5000/saveCompany";
  private REST_API_PUT = "http://localhost:5000/updateCompany";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_GET);
  }
  public postRequest(companyDetails){
    const headers = { 'content-type': 'application/json'}  
    const companyData=JSON.stringify(companyDetails);
   
    return this.httpClient.post(this.REST_API_SAVE, companyData,{'headers':headers})
    
  }
  public putRequest(companyData){
    const headers = { 'content-type': 'application/json'}  
    
    return this.httpClient.post(this.REST_API_PUT, companyData,{'headers':headers})
    
  }
}
