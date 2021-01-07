import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import{ GlobalConstants } from '../common/global-constants';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyDetailsService {

  private REST_API_GET = GlobalConstants.apiURL+"/getAllCompanies";
  private REST_API_SAVE = GlobalConstants.apiURL+"/saveCompany";
  private REST_API_PUT = GlobalConstants.apiURL+"/updateCompany";

  constructor(private httpClient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_GET).pipe(retry(3),catchError(this.handleError));;
  }
  public postRequest(companyDetails){
    const headers = { 'content-type': 'application/json'}  
    const companyData=JSON.stringify(companyDetails);
   
    return this.httpClient.post(this.REST_API_SAVE, companyData,{'headers':headers}).pipe(retry(3),catchError(this.handleError));
    
  }
  public putRequest(companyData){
    const headers = { 'content-type': 'application/json'}  
    
    return this.httpClient.post(this.REST_API_PUT, companyData,{'headers':headers}).pipe(retry(3),catchError(this.handleError));
    
  }
}
