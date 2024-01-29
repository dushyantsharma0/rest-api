const product=require("../models/products")

const getAllProducts=async(req,resp)=>{
    const {company,name,sort,select}=req.query;
    
const queryObject={}
if(company){
    queryObject.company=company
    
}if(name){
    queryObject.name={$regex: name,$options:"i"}
}


let apiData=product.find(queryObject)


if(sort){
let shortFix=sort.split(",").join(" ");
apiData=apiData.sort(shortFix)
}
if(select){
    let selectFix=select.split(",").join(" ");
    apiData=apiData.select(selectFix)
}

let page=Number(req.query.page) || 1;
let limit=Number(req.query.limit) || 3;
let skip=(page-1)*limit;

apiData=apiData.skip(skip).limit(limit)


    const products=await apiData.sort(sort)
resp.status(200).json({products,nbHits:products.length})
};
const getAllProductsTesting=async(req,resp)=>{
    resp.status(200).json({msg:"i am get all getAllProductsTesting"})
    };

module.exports={getAllProducts,getAllProductsTesting};