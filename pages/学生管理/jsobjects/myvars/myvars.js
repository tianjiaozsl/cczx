export default {
	mygrade: [
  {
    "label": "高一",
    "value": "高一"
  },
  {
    "label": "高二",
    "value": "高二"
  },
  {
    "label": "高三",
    "value": "高三"
  },
  {
    "label": "自强",
    "value": "自强"
  }],
	mappings:{
  "高一": 2023,
  "高二": 2022,
  "高三": 2021,
  "自强": 2020
	},
	func_ssns:() => {
		find_ssn.run();
		if(find_ssn.data[0]['counts'] > 0){
			showAlert('身份证重复！')
		}
	}
}