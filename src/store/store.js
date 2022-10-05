import {makeAutoObservable} from "mobx";
import {axiosGetAllCars} from "../axios/requests";



class Store {
    _allCars=[]
    _typeCar = 'С пробегом'
    _formData = {'brand':'','model':'','price_from':'','price_to':'','engine_power_from':'','engine_power_to':'',
        'car_body':'','transmission':'','engine_fuel_type':'','drive':'','dealer':'','color':''};
    _showAllFilters = false;
    _loadData = false
    _defaultValuesSelects={'brand':'','model':'', 'car_body':'','transmission':'','engine_fuel_type':'','drive':'',
        'dealer':'',color:''};
    _defaultCountCars = 0
    //----actual data------




    constructor() {
        makeAutoObservable(this)
    }
    getTypeCar=()=>{
        return this._typeCar
    }
    setTypeCar=(data)=>{
        this._typeCar = data
    }
    getFormData=()=>{
        return this._formData
    }
    setFormData=(key,value)=>{
        this._formData = {...this._formData,[key]:value}
    }
    resetFormData = ()=>{
        this._formData = {
            'brand':'','model':'','price_from':'','price_to':'','year_from':'','year_to':'',
            'engine_power_from':'','engine_power_to':'','car_body':'','transmission':'','engine_fuel_type':'','drive':'',
            'dealer':'','color':''
        }
    }
    getShowAllFilters=()=>{
        return this._showAllFilters
    }
    setShowAllFilters=(bool)=>{
        this._showAllFilters = bool
    }

    getAllCars=()=>{
        return this._allCars
    }
    setAllCars=(data)=>{
        axiosGetAllCars().then((data)=>{
            let brands = new Set()
            let models = new Set()
            let bodyType = new Set()
            let transmissionType = new Set()
            let fuelType = new Set()
            let driveType = new Set()
            let dealers = new Set()
            let colorCar = new Set()
            data.data['cars'].forEach(({brand,model,body,transmission_type,fueltype,drive_type_id,location,color})=>{
                brands.add(brand)
                models.add(model)
                bodyType.add(body)
                transmissionType.add(transmission_type)
                transmissionType.add(transmission_type)
                fuelType.add(fueltype)
                driveType.add(drive_type_id)
                dealers.add(location)
                if (color){
                    colorCar.add(color)
                }


            })
            this._defaultValuesSelects={'brand':[...brands],'model':[...models], 'car_body':[...bodyType],
                'transmission':[...transmissionType],'engine_fuel_type':[...fuelType],'drive':[...driveType]
                ,'dealer':[...dealers],color:[...colorCar]};
            this._allCars = data.data['cars']
            this._defaultCountCars=data.data['cars'].length
            this._loadData = true
        })
        this._allCars = data
    }
    getLoadData=()=>{
        return this._loadData
    }
    getDefaultValuesSelects=()=>{
        return this._defaultValuesSelects
    }
    getDefaultCountCars=()=>{
        return this._defaultCountCars
    }
    setDefaultCountCars=()=>{
        const data = [...this._allCars]
        console.log(this._typeCar)
        let currentData = data
            .filter((item)=>this._typeCar === 'Спец.предложения'?item.promo :item)
            .filter((item)=>this._formData.brand?item.brand === this._formData.brand:item)
            .filter((item)=>this._formData.model?item.model === this._formData.model:item)
            .filter((item)=>this._formData.year_from?+item.years >= +this._formData.year_from:item)
            .filter((item)=>this._formData.year_to?+item.years <= +this._formData.year_to:item)
            .filter((item)=>this._formData.price_from?+item.price >= +(this._formData.price_from.replaceAll(' ','')):item)
            .filter((item)=>this._formData.price_to?+item.price <= +(this._formData.price_to.replaceAll(' ','')):item)
            .filter((item)=>this._formData.engine_power_from?+item.power >= +(this._formData.engine_power_from.replaceAll(' ','')):item)
            .filter((item)=>this._formData.engine_power_to?+item.power <= +(this._formData.engine_power_to.replaceAll(' ','')):item)
            .filter((item)=>this._formData.car_body?item.body === this._formData.car_body:item)
            .filter((item)=>this._formData.transmission?item.transmission_type === this._formData.transmission:item)
            .filter((item)=>this._formData.engine_fuel_type?item.fueltype === this._formData.engine_fuel_type:item)
            .filter((item)=>this._formData.drive?item.drive_type_id === this._formData.drive:item)
            .filter((item)=>this._formData.color?item.color === this._formData.color:item)
            .filter((item)=>this._formData.dealer?item.location === this._formData.dealer:item)
        this._defaultCountCars = currentData.length
    }
}

export default new Store()