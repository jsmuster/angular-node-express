class CustomerModel
{
	constructor(first_name, last_name, email, zipcode, password)
	{
		this.first_name = first_name;
		this.last_name = last_name;
		this.email = email;
		this.zipcode = zipcode;
		this.password = password;
		this.uid = null;
	}
}

module.exports = CustomerModel;