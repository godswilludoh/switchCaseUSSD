// Bank USSD
// 1. Airtime-self
// 2. Airtime-Others
// 3. Data
// 4. Transfer

//*****Bank USSD **********/
let bankPin = 1000;
let bankCode = '*901#';

alert('Welcome to Access Bank');
let start = prompt('Input *901# to get started');

switch (start) {
	case bankCode:
		alert('Correct code');
		let option = prompt(`
1.Airtime-self
2.Airtime-Others
3.Data
4.Transfer
`);
		switch (option) {
			case '1':
				alert('airtime self');
				let airtime = prompt('Enter amount: ');

				switch (true) {
					case airtime > 20000:
						alert('Cannot carry out transactions greater than #20,000');
						break;

					case airtime <= 9:
						alert('Cannot carry out transactions less than #10');
						break;

					case airtime >= 10 && airtime <= 20000:
					default:
						let airtimeSelfBuy = prompt('Enter Bank Pin: ');
						switch (true) {
							case airtimeSelfBuy == Number(bankPin):
								alert('Transaction Processing');
								alert('Airtime amount sent');
								break;
							default:
								alert('Wrong pin inputted');
								break;
						}
				}
				break;
			case '2':
				alert('airtime others');
				let airtimeOthers = prompt('Enter airtime amount to transfer:');
				switch (true) {
					case airtimeOthers > 20000:
						alert('Cannot carry out transactions greater than #20,000');
						break;
					case airtimeOthers < 9:
						alert('Cannot carry out transactions less than #10');
						break;
					case airtimeOthers >= 10 && airtimeOthers <= 20000:
					default:
						let airtimeTransferNumber = prompt('Enter number to transfer:');
						switch (true) {
							case airtimeTransferNumber.length === 11:
								alert('Inputted number must be 11 digits');
								break;
							default:
								alert('Are you sure you want to make transfer?');
								let transferAirtimeOption = prompt(`
1.Yes
2.No
`);
								switch (true) {
									case transferAirtimeOption == 1:
										alert('Transaction Processing');
										alert('Airtime transferred successfully');
										break;
									case transferAirtimeOption == 2:
										alert('Transaction Cancelled');
										break;
									default:
										alert('Wrong Input');
								}
						}
				}
				break;
			case '3':
				alert('data purchase');
				let provider = prompt(`Select Network Provider:
1.MTN_DATA
2.AIRTEL_DATA
3.GLO_DATA
4.9MOBILE_DATA
`);
				switch (provider) {
					case '1':
						alert('Buy MTN Data');
						break;
					case '2':
						alert('Buy AIRTEL Data');
						break;
					case '3':
						alert('Buy GLO Data');
						break;
					case '4':
						alert('Buy 9MOBILE Data');
						break;
				}
				break;
			case '4':
				alert('transfer');
				break;
			default:
				alert('Invalid input');
		}
		break;
	default:
		alert('Invalid code');
}
