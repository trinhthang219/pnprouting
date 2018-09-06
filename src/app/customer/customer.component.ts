import { Component, OnInit ,  AfterViewInit, OnChanges} from "@angular/core";
import { CustomerServices  } from "./customer-services/customer.services"
import { Customer } from "./customer-models/customer.model"
@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers:[CustomerServices]
})
export class CustomerComponent implements OnInit, AfterViewInit, OnChanges{
  public  customer: Customer[];
  public  selectedCustomer: Customer;
  public constructor(private customerService: CustomerServices){
    console.log("home work"); 
  }
  public  getAllCustomers(): void {
    this.customerService.getAllCustomers().then(result => {this.customer = result ; console.log( "abc " + result)} )
  }
  public  getCustomerById(): void {
    this.customerService.getCustomer(1).then(result => this.selectedCustomer = result)
  }
  public  ngOnInit(): void {
    console.log("customer work");
    // this.getAllCustomers();
  }
  public  ngAfterViewInit():void {
    console.log("after view init");
  }

  public  ngOnChanges():void{
    console.log("on change");
  }
}
