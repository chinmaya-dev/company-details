import { Component,Input, OnInit } from '@angular/core';
import { CompanyDetailsService } from './services/company-details.service';
import { FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  companies = [];
  form: FormGroup;
  Companyname: string;
  Companyaddress: string;
  Companyphone: string;
  Companyear: string;
  Companygst: string;
  isFormShow:boolean=true;
  public companyDetails;
  constructor(private dataService: CompanyDetailsService) { }

  getAllCompanyDetails(){
    this.dataService.sendGetRequest().subscribe((data: any[])=>{
      
      this.companies = data;
    }) 
  }

  editCompany(editdata){
   
    this.dataService.putRequest(editdata).subscribe((data: any[])=>{
      console.log(data);
      this.getAllCompanyDetails();
      
    }) 
    
  }

  postCompanyDetails() {
    let companyDetails = {name: this.Companyname,address: this.Companyaddress, phone: this.Companyphone, foundationyear: this.Companyear,GSTNo: this.Companygst};
    this.dataService.postRequest(companyDetails).subscribe((data: any[])=>{
      console.log(data);
      this.isFormShow = false;
      this.getAllCompanyDetails();
      
    }) 
    
  }



  ngOnInit() {
    this.getAllCompanyDetails();
  
  }
}
