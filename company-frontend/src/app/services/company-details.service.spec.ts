import { TestBed, inject, getTestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { CompanyDetailsService } from './company-details.service';
import { HttpClientModule } from '@angular/common/http';
import { ICompanyDetails } from '../models/company.model';
import{ GlobalConstants } from '../common/global-constants';

describe('CompanyDetailsService', () => {
  let service: CompanyDetailsService;
  let httpTestingController: HttpTestingController;
  let companyDetailsService: CompanyDetailsService;
  let baseUrl = GlobalConstants.apiURL+"/getAllCompanies";
  let companyTestData: ICompanyDetails;
  let testBed;
  
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [       
        HttpClientModule,
        HttpClientTestingModule,
        
      ],
    });
    service = TestBed.inject(CompanyDetailsService);
    

    companyTestData = {      
      name: 'Reliance',
      foundationyear: '2005',
      phone: '9438012211',
      address: 'Navi Mumbai',
      GSTNo: 'fgh12345',
      _id: {$oid: '5fe8092ec48a7317f38be8df'}
    };
  });
  beforeEach(() => {

    testBed = getTestBed(); 

    httpTestingController = testBed.get(HttpTestingController);
    
  });
  beforeEach(inject(
    [CompanyDetailsService],
    (service: CompanyDetailsService) => {
      companyDetailsService = service;
    }
  ));


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it("should return data", () => {
    
    let apiresult: ICompanyDetails[];
    companyDetailsService.sendGetRequest().subscribe(t => {
      apiresult = t;
    });
    const req = httpTestingController.expectOne({
      method: "GET",
      url: "http://localhost:5000/getAllCompanies"
    });
   
    req.flush([companyTestData]);
    
    
    expect(apiresult[0]).toEqual(companyTestData);
  });


});

