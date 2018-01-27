import { SummaryService } from './summary.service';




import { Component,NgModule, OnInit, AfterViewInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

declare var $:any;

@Component({
  selector: 'app-transformer',
  templateUrl: './transformer.component.html',
  styleUrls: ['./transformer.component.css'],
  providers: [SummaryService],
})
export class TransformerComponent implements OnInit, AfterViewInit {

GetSummary=[];
GetKeys=[];

  
  
  batchVal:string='';
  sourceSysVal=[];
  fromDateVal:string = '';
  fromdate:string='';
  toDateVal:string = '';
  isValid:boolean;
  check:boolean=true;

  batchId: 'string';
  matched: 'number';
  unMatched: 'number';
  

  isbatchval() {
    
    if(this.batchVal.length==0 ){
       return true;
    }else {
        return false;
    } 







}


  issourcesys() {
    
 if(this.sourceSysVal.length==0){
      return true;
 }else  {
       return false;
    
    }
}

isfromdateVal(){
  

  console.log(this.fromdate.length);

  if(this.fromdate.length==0){

    return false;
  
  }else{
    return true;
  }
}


 
  
  

  persons : [{
    fieldName: string,
    generatedData: string,
    targetedData : string
   
}];
address : [{
  fieldName: string,
  generatedData: string,
  targetedData : string
 
}];

telecommunication : [{
  fieldName: string,
  generatedData: string,
  targetedData : string
 
}];
elecommunication : [{
  fieldName: string,
  generatedData: string,
  targetedData : string
 
}];
socialmedia : [{
  fieldName: string,
  generatedData: string,
  targetedData : string
 
}];



  dropdownList = [];

    selectedItems = [];

    dropdownSettings = {};
    constructor(private summaryService:SummaryService ) { 
  

      this.persons = [{
        fieldName :"FirstName",
        generatedData:"XXXX",
        targetedData:"XXXX"
    },
    {
      fieldName :"LastName",
      generatedData:"YYYY",
      targetedData:"YYYY"
    },
    {
    fieldName :"MiddleName",
    generatedData:"ZZZZ",
    targetedData:"ZZZZ"
    }]
    
    this.address=[{
    fieldName :"Line",
    generatedData:"AAAA",
    targetedData:"AAAA"
    },
    {
    fieldName :"City",
    generatedData:"BBBB",
    targetedData:"BBBB"
    },
    {
    fieldName :"State",
    generatedData:"CCCC",
    targetedData:"CCCC"
    }]
    
    this.telecommunication=[{
    fieldName :"Extension",
    generatedData:"SSSS",
    targetedData:"SSSS"
    },
    {
    fieldName :"Phonenumber",
    generatedData:"TTTT",
    targetedData:"TTTT"
    },
    {
    fieldName :"Countrycode",
    generatedData:"UUUU",
    targetedData:"UUUU"
    }]
    
    this.elecommunication=[{
      fieldName :"Email",
      generatedData:"IIII",
      targetedData:"IIII"
      },
      {
      fieldName :"Fax",
      generatedData:"OOOO",
      targetedData:"OOOO"
      },
      {
      fieldName :"State",
      generatedData:"PPPP",
      targetedData:"PPPP"
      }]
    
      this.socialmedia=[{
        fieldName :"Email",
        generatedData:"qqqq",
        targetedData:"qqqq"
        },
        {
        fieldName :"Twitter ID",
        generatedData:"WWWWW",
        targetedData:"WWWWW"
        },
        {
        fieldName :"facebook ID",
        generatedData:"TTTT",
        targetedData:"TTTT"
        }]
    
    }
    
    ngOnInit(){
     
      
      this.summaryService.getSummary()
      .subscribe(summaryDetails => this.GetSummary = summaryDetails);
      console.log("hhh" +this.GetSummary[0]);

      this.summaryService.getKey()
      .subscribe(keyDetails => this.GetKeys = keyDetails);

      console.log("hhh" +this.GetKeys);



        this.dropdownList = [

                              {"id":1,"itemName":"FX"},

                              {"id":2,"itemName":"FDM"},

                              {"id":3,"itemName":"FDFR"},

                              {"id":4,"itemName":"EACI"}

                             

                            ];

        this.selectedItems = [

                               
          

                            ];

        this.dropdownSettings = {

                                  singleSelection: false,

                                  //text:"",
                                  selectAllText:'Select All',

                                  unSelectAllText:'UnSelect All',

                                  enableSearchFilter: true,

                                  classes:"myclass custom-class"

                               };           

    }

    onItemSelect(item:any){

       
    }

    OnItemDeSelect(item:any){

        
    }

    onSelectAll(items: any){

        

    }

    onDeSelectAll(items: any){


    }

 

 


  isCollapsed:boolean = false;

  isCollapsedAdd:boolean = true;

  isCollapsedTele:boolean = true;

  isCollapsedSocio:boolean = true;

  isCollapsedElect:boolean = true;

//   contacts= [

//     {"keyid":"1001",

//     "matched":"difference"

//     },

//     {"keyid":"1002",

//     "matched":"same"

//     },

//     {"keyid":"1003",

//     "matched":"same"

//     },

//     {"keyid":"1005",

//     "matched":"difference"

//     },

//     {"keyid":"1006",

//     "matched":"difference"

//     },

//     {"keyid":"1007",

//     "matched":"same"

//     },

//     {"keyid":"1008",

//     "matched":"difference"

//     },

//     {"keyid":"1009",

//     "matched":"difference"

//     },

//     {"keyid":"1010",

//     "matched":"same"

//     },

//     {"keyid":"1011",

//     "matched":"difference"

//     },

//     {"keyid":"1012",

//     "matched":"difference"

//     },

//     {"keyid":"1013",

//     "matched":"same"

//     }

// ];

 
//  batchs = [{

//      "id":"FX_23042018123044",

//      "matched":"1000",

//      "unmatched":"500"

//   },

//   {

//     "id":"FX_23042018123043",

//     "matched":"1500",

//     "unmatched":"0"

// },

// {

//   "id":"FX_23042018123042",

//   "matched":"1400",

//   "unmatched":"100"

// },

// {

//   "id":"FX_23042018123041",

//   "matched":"1300",

//   "unmatched":"200"

// },

// {

//   "id":"FX_23042018123040",

//   "matched":"1200",

//   "unmatched":"300"

// },
// {

//   "id":"FX_23042018123049",

//   "matched":"1900",

//   "unmatched":"900"

// }
 

// ]

 




 

 

  ngAfterViewInit(){

    

    
 }
 
  
  reset()
  {

    this.batchVal = '';
    this.sourceSysVal.length=0;
    this.fromDateVal = '';
    this.toDateVal = '';



  }
  

Search()

{

this.selectedSearch=true;

}





key: string = 'id'; //set default
 

key1: string = 'keyid';

 

  reverse: boolean = true;

 

  reverse1: boolean = true;

 

  selectedSearch:boolean=false;

 

  sort(key){

 

    this.key = key;

 

    this.reverse = !this.reverse;

 

}

 

sortKey(key1){

 

  this.key1 = key1;

 

  this.reverse1 = !this.reverse1;

 

}

 

//initializing p to one
 

pd: number = 1;

pg: number = 1;


 }