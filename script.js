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
				break;
			case '2':
				alert('airtime others');
				break;
			case '3':
				alert('data');
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
