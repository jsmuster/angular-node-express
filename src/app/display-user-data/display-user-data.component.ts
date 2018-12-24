import { Component, OnInit } from '@angular/core';
import {UserInfoModel} from '../models/userInfo';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'display-user-data',
  templateUrl: './display-user-data.component.html',
  styleUrls: ['./display-user-data.component.css']
})

export class DisplayUserDataComponent implements OnInit
{

	user: UserInfoModel = new UserInfoModel({guid: "D21ds12x", 
		uid: "cust2dsa12dsa", 
		first_name: "John", 
		last_name: "Doe", 
		email: "email@email.com", 
		zipcode: 10283,
		password: "Idasn2x2#"});

	constructor(private http: HttpClient, private route: ActivatedRoute) {

	}

	private subscriber: any;

	ngOnInit()
	{
		this.subscriber = this.route.params.subscribe(params => {
	       
	       this.http.get('/api/v1/customer/' + params.uid).subscribe((data:any) => {

				this.user = new UserInfoModel(data.customer);
		    });
	    });
	}

}
