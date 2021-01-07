import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyDetailsService } from './services/company-details.service';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
 
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should use the companyList from the service", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.debugElement.componentInstance;
    const companyService = fixture.debugElement.injector.get(CompanyDetailsService);
    fixture.detectChanges();
    expect(companyService.sendGetRequest()).toEqual(component.ICompanyDetails);
  });

  it("should create a new company", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.debugElement.componentInstance;
    component.companyDetails = {name: "test company",address: "test address", phone: "test phone", foundationyear: "test year",GSTNo: "test gst"};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.innerHTML).toContain("Submit");
  });

  // it(`should have as title 'company-frontend'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('company-frontend');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('company-frontend app is running!');
  // });


});
